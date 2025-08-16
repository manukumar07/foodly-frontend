import React, { useState } from "react";
import { dishes } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { Plus, Heart, Search, Filter } from "lucide-react";
import toast from "react-hot-toast";

const Dishes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const categories = [
    "All",
    ...Array.from(new Set(dishes.map((d) => d.category))),
  ];

  const filteredDishes = dishes
    .filter((dish) => {
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || dish.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popular")
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  // pagination logic
  const totalPages = Math.ceil(filteredDishes.length / itemsPerPage);

  const paginatedDishes = filteredDishes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddToCart = (dish) => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      restaurantName: dish.restaurantName,
    });
    toast.success(`${dish.name} has been added to your cart.`);
  };

  const handleToggleFavorite = (dish) => {
    const alreadyFavorite = isFavorite(dish.id);
    toggleFavorite({
      id: dish.id,
      name: dish.name,
      type: "dish",
      image: dish.image,
      price: dish.price,
      restaurantName: dish.restaurantName,
    });

    if (alreadyFavorite) {
      toast.error(`${dish.name} removed from your favorites.`);
    } else {
      toast.success(`${dish.name} added to your favorites.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-[Poppins] py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#10B981] bg-clip-text text-transparent">
            All{" "}
            <span className="bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Dishes
            </span>
          </h1>
          <p className="text-[#6B7280] text-lg">
            Discover delicious dishes from top restaurants
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:border-[#F97316] focus:ring-2 focus:ring-[#F97316] transition-all duration-200"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-[#6B7280]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
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
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Results Count */}

        <div className="mb-4 ml-2 flex items-center justify-between">
          <p className="text-[#6B7280]">
            Showing {Math.min(12, filteredDishes.length)} of{" "}
            {filteredDishes.length} dish
            {filteredDishes.length !== 1 ? "es" : ""}
          </p>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mb-6 font-sans">
              {/* Previous Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="text-[#111827] border-[#E5E7EB] hover:border-[#F97316] hover:bg-[#F97316] hover:text-[#FFFFFF] px-4 transition-all duration-200"
              >
                Previous
              </Button>

              {/* Page Buttons with ellipsis */}
              <div className="flex items-center space-x-1">
                {[1, 2, 3].map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    className={`w-8 ${
                      currentPage === page
                        ? "bg-[#F97316] text-white border-[#F97316]"
                        : "text-[#111827] border-[#E5E7EB] hover:bg-[#F97316]/10 hover:border-[#F97316]"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}

                {/* Ellipsis */}
                {totalPages > 2 && (
                  <span className="text-[#6B7280] px-2">...</span>
                )}

                {/* Last Page */}
                {totalPages > 3 && (
                  <Button
                    variant={currentPage === totalPages ? "default" : "outline"}
                    size="sm"
                    className={`w-8 ${
                      currentPage === totalPages
                        ? "bg-[#F97316] text-white border-[#F97316]"
                        : "text-[#111827] border-[#E5E7EB] hover:bg-[#F97316]/10 hover:border-[#F97316]"
                    }`}
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    {totalPages}
                  </Button>
                )}
              </div>

              {/* Next Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="text-[#111827] border-[#E5E7EB] hover:border-[#F97316] hover:bg-[#F97316] hover:text-[#FFFFFF] px-4 transition-all duration-200"
              >
                Next
              </Button>
            </div>
          )}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] hover:border-[#F97316]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Dish Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#F97316]/10 to-[#10B981]/10 flex items-center justify-center">
                {/* <div className="text-8xl opacity-20">🍽️</div> */}
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-3 right-3 bg-[#FFFFFF]/90 backdrop-blur-sm hover:scale-110 transition-all duration-200 ${
                    isFavorite(dish.id)
                      ? "text-red-500"
                      : "text-[#6B7280] hover:text-red-500"
                  }`}
                  onClick={() => handleToggleFavorite(dish)}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite(dish.id) ? "fill-current" : ""
                    }`}
                  />
                </Button>
              </div>

              {/* Dish Info */}
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-[#111827] group-hover:text-[#F97316] transition-colors line-clamp-1">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-xl font-bold text-[#F97316]">
                      ${dish.price}
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      from {dish.restaurantName}
                    </div>
                  </div>

                  <Button
                    size="icon"
                    className="bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => handleAddToCart(dish)}
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              No dishes found
            </h3>
            <p className="text-[#6B7280]">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dishes;
