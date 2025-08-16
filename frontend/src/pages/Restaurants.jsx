import React, { useState } from "react";
import { restaurants } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useFavorites } from "@/context/FavoritesContext";
import {
  Star,
  Clock,
  Heart,
  ArrowRight,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const { toggleFavorite, isFavorite } = useFavorites();
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const cuisines = [
    "All",
    ...Array.from(new Set(restaurants.map((r) => r.cuisine))),
  ];

  const itemsPerPage = 8;

  // const filteredRestaurants = restaurants
  //   .filter((restaurant) => {
  //     const matchesSearch =
  //       restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
  //     const matchesCuisine =
  //       selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;
  //     return matchesSearch && matchesCuisine;
  //   })
  //   .sort((a, b) => {
  //     if (sortBy === "rating") return b.rating - a.rating;
  //     if (sortBy === "name") return a.name.localeCompare(b.name);
  //     return 0;
  //   });

  // const handleToggleFavorite = (restaurant) => {
  //   const alreadyFav = isFavorite(restaurant.id);

  //   toggleFavorite({
  //     id: restaurant.id,
  //     name: restaurant.name,
  //     type: "restaurant",
  //     image: restaurant.image,
  //     rating: restaurant.rating,
  //     cuisine: restaurant.cuisine,
  //     deliveryTime: restaurant.deliveryTime,
  //     deliveryFee: restaurant.deliveryFee,
  //   });

  //   toast[alreadyFav ? "error" : "success"](
  //     `${restaurant.name} has been ${
  //       alreadyFav ? "removed from" : "added to"
  //     } your favorites.`,
  //     {
  //       duration: 3000,
  //       position: "top-right",
  //     }
  //   );
  // };

  // Filtered and sorted restaurants
  const filteredRestaurants = restaurants
    .filter((restaurant) => {
      // Search filter
      const matchesSearch =
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());

      // Cuisine filter
      const matchesCuisine =
        selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;

      // Rating filter
      let matchesRating = true;
      if (ratingFilter !== "all") {
        if (ratingFilter === "35plus") matchesRating = restaurant.rating >= 3.5;
        if (ratingFilter === "4plus") matchesRating = restaurant.rating >= 4.0;
        if (ratingFilter === "45plus") matchesRating = restaurant.rating >= 4.5;
        if (ratingFilter === "48plus") matchesRating = restaurant.rating >= 4.8;
        if (ratingFilter === "5") matchesRating = restaurant.rating === 5.0;
      }

      // Price filter
      const fee = parseFloat(restaurant.deliveryFee.replace("$", ""));
      let matchesPrice = true;
      if (priceFilter !== "all") {
        if (priceFilter === "free") matchesPrice = fee === 0;
        if (priceFilter === "under3") matchesPrice = fee < 3;
        if (priceFilter === "under5") matchesPrice = fee < 5;
        if (priceFilter === "under10") matchesPrice = fee < 10;
        if (priceFilter === "under15") matchesPrice = fee < 15;
        if (priceFilter === "under20") matchesPrice = fee < 20;
      }

      return matchesSearch && matchesCuisine && matchesRating && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "deliveryFee") {
        const feeA = parseFloat(a.deliveryFee.replace("$", ""));
        const feeB = parseFloat(b.deliveryFee.replace("$", ""));
        return feeA - feeB;
      }
      return 0;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const paginatedRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle favorite toggle
  const handleToggleFavorite = (restaurant) => {
    const alreadyFav = isFavorite(restaurant.id);
    toggleFavorite({
      id: restaurant.id,
      name: restaurant.name,
      type: "restaurant",
      image: restaurant.image,
      rating: restaurant.rating,
      cuisine: restaurant.cuisine,
      deliveryTime: restaurant.deliveryTime,
      deliveryFee: restaurant.deliveryFee,
    });

    toast[alreadyFav ? "error" : "success"](
      `${restaurant.name} has been ${
        alreadyFav ? "removed from" : "added to"
      } your favorites.`,
      { duration: 3000, position: "top-right" }
    );
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-8 font-['Poppins','Inter',ui-sans-serif,system-ui]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#10B981] bg-clip-text text-transparent">
            All{" "}
            <span className="bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Restaurants
            </span>
          </h1>
          <p className="text-[#6B7280] text-lg ">
            Discover amazing restaurants in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search restaurants or cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:border-[#F97316] focus:ring-2 focus:ring-[#F97316] transition-all duration-200"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Cuisine Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-[#6B7280]" />
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
              >
                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
            >
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
              <option value="deliveryTime">Sort by Delivery Time</option>
              <option value="deliveryFee">Sort by Delivery Fee</option>
            </select>

            {/* Price Filter */}
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
            >
              <option value="all">All Prices</option>
              <option value="free">Free Delivery</option>
              <option value="under3">Under $3</option>
              <option value="under5">Under $5</option>
              <option value="under10">Under $10</option>
              <option value="under15">Under $15</option>
              <option value="under20">Under $20</option>
            </select>

            {/* Rating Filter */}
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
            >
              <option value="all">All Ratings</option>
              <option value="35plus">3.5+ Stars</option>
              <option value="4plus">4.0+ Stars</option>
              <option value="45plus">4.5+ Stars</option>
              <option value="48plus">4.8+ Stars</option>
              <option value="5">5.0 Stars</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-right">
          <p className="text-[#6B7280]">
            Showing {filteredRestaurants.length} restaurant
            {filteredRestaurants.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="group bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] hover:border-[#F97316]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Restaurant Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#F97316]/10 to-[#10B981]/10 flex items-center justify-center">
                {/* <div className="text-8xl opacity-20">🏪</div> */}
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-3 right-3 bg-[#FFFFFF]/90 backdrop-blur-sm hover:scale-110 transition-all duration-200 ${
                    isFavorite(restaurant.id)
                      ? "text-[#EF4444]"
                      : "text-[#6B7280] hover:text-[#EF4444]"
                  }`}
                  onClick={() => handleToggleFavorite(restaurant)}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite(restaurant.id) ? "fill-current" : ""
                    }`}
                  />
                </Button>

                {/* Featured Badge */}
                {restaurant.featured && (
                  <Badge className="absolute top-3 left-3 bg-[#F97316] text-white">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Restaurant Info */}
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-[#111827] group-hover:text-[#F97316] transition-colors">
                    {restaurant.name}
                  </h3>
                  <p className="text-[#6B7280] text-sm">{restaurant.cuisine}</p>
                </div>

                {/* Rating and Delivery Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[#6B7280]">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                </div>

                {/* Delivery Fee and CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <div className="text-sm text-[#6B7280]">
                      {restaurant.deliveryFee} delivery
                    </div>
                    <div className="flex gap-1">
                      {restaurant.categories.slice(0, 2).map((category) => (
                        <Badge
                          key={category}
                          variant="secondary"
                          className="text-xs"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] transition-all duration-200"
                    asChild
                  >
                    <Link to={`/restaurant/${restaurant.id}`}>
                      Menu
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 font-sans">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="text-[#111827] border-[#E5E7EB] hover:border-[#F97316] hover:bg-[#F97316] hover:text-[#FFFFFF] transition-all duration-200 px-4"
            >
              Previous
            </Button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-md border text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? "bg-[#F97316] text-white border-[#F97316]"
                    : "bg-[#FFFFFF] text-[#111827] border-[#E5E7EB] hover:bg-[#F97316]/10 hover:border-[#F97316]"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="text-[#111827] border-[#E5E7EB] hover:border-[#F97316] hover:bg-[#F97316] hover:text-[#FFFFFF] transition-all duration-200 px-4"
            >
              Next
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              No restaurants found
            </h3>
            <p className="text-[#6B7280]">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
