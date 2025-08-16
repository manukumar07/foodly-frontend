import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurants, dishes } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import toast from "react-hot-toast"; // ✅ import react-hot-toast
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Heart,
  Plus,
  Minus,
  Search,
  Filter,
  ChefHat,
  Award,
  Truck,
  Phone,
} from "lucide-react";

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const restaurantDishes = dishes.filter((d) => d.restaurantId === id);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quantities, setQuantities] = useState({});

  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Restaurant not found
          </h1>
          <Button asChild>
            <Link to="/restaurants">Back to Restaurants</Link>
          </Button>
        </div>
      </div>
    );
  }

  const categories = [
    "All",
    ...Array.from(new Set(restaurantDishes.map((d) => d.category))),
  ];

  const filteredDishes = restaurantDishes.filter((dish) => {
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || dish.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuantityChange = (dishId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [dishId]: Math.max(0, (prev[dishId] || 0) + change),
    }));
  };

  const handleAddToCart = (dish) => {
    const quantity = quantities[dish.id] || 1;
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        restaurantName: restaurant.name,
      });
    }

    // ✅ Use react-hot-toast
    toast.success(`${quantity}x ${dish.name} added to your cart!`);

    setQuantities((prev) => ({ ...prev, [dish.id]: 0 }));
  };

  const handleToggleFavorite = () => {
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

    toast(
      isFavorite(restaurant.id)
        ? `${restaurant.name} removed from favorites!`
        : `${restaurant.name} added to favorites!`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/10 via-surface to-accent/10 py-8">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center mb-6">
            {/* Back Button */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="mr-4 bg-[#FFFFFF]/90 hover:scale-110 transition-all duration-200"
            >
              <Link to="/restaurants">
                <ArrowLeft className="w-5 h-5 text-[#111827]" />
              </Link>
            </Button>

            {/* Page Title */}
            <h1 className="text-2xl md:text-3xl font-[Poppins] font-bold text-[#111827] animate-[fade-in_0.3s_ease-out]">
              Restaurant Details
            </h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Restaurant Hero */}
              <div className="relative h-80 bg-gradient-to-br from-[#F97316]/20 via-[#10B981]/10 to-[#F97316]/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* <div className="text-9xl opacity-20">🏪</div> */}
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-[#84CC16] rounded-full animate-[pulse-soft_2s_ease-in-out_infinite]"></div>
                      <span className="text-sm font-medium">Open Now</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Closes at 11:00 PM</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-sm hover:scale-110 transition-all duration-200 ${
                    isFavorite(restaurant.id)
                      ? "text-[#EF4444]"
                      : "text-[#6B7280] hover:text-[#EF4444]"
                  }`}
                  onClick={handleToggleFavorite}
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFavorite(restaurant.id) ? "fill-current" : ""
                    }`}
                  />
                </Button>

                {restaurant.featured && (
                  <Badge className="absolute top-4 left-4 bg-[#F97316] text-[#FFFFFF]">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div>
                    <h2 className="text-3xl font-[Poppins] font-bold text-[#111827] mb-2">
                      {restaurant.name}
                    </h2>
                    <p className="text-lg text-[#6B7280] mb-4">
                      {restaurant.cuisine}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">
                          {restaurant.rating}
                        </span>
                        <span className="text-[#6B7280]">(500+ reviews)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-[#6B7280]" />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Truck className="w-5 h-5 text-[#6B7280]" />
                        <span>{restaurant.deliveryFee} delivery</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-6">
                      {restaurant.categories.map((category) => (
                        <Badge key={category} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Cards in grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Row 1 */}
                    <Card className="bg-[#F97316]/5 border-[#F97316]/20">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-[#F97316]" />
                          <div>
                            <p className="font-semibold">Location & Delivery</p>
                            <p className="text-sm text-[#6B7280]">
                              123 Main Street, Downtown
                            </p>
                            <p className="text-sm text-[#6B7280]">
                              Delivers within 5km radius
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#10B981]/5 border-[#10B981]/20">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-[#10B981]" />
                          <div>
                            <p className="font-semibold">Contact & Hours</p>
                            <p className="text-sm text-[#6B7280]">
                              +1 (555) 987-6543
                            </p>
                            <p className="text-sm text-[#6B7280]">
                              Daily: 10:00 AM - 11:00 PM
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Row 2 */}
                    <Card className="bg-[#DBEAFE]/50 border-[#BFDBFE]/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-[#2563EB]" />
                          <div>
                            <p className="font-semibold">Recognition</p>
                            <p className="text-sm text-[#6B7280]">
                              🏆 Best Local Restaurant 2024
                            </p>
                            <p className="text-sm text-[#6B7280]">
                              ⭐ Top Rated on Foodly
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#FEF3C7]/50 border-[#FDE68A]/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <ChefHat className="w-5 h-5 text-[#CA8A04]" />
                          <div>
                            <p className="font-semibold">Chef's Special</p>
                            <p className="text-sm text-[#6B7280]">
                              Try our signature dishes
                            </p>
                            <p className="text-sm text-[#6B7280]">
                              Made with fresh local ingredients
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Row 3 */}
                    <Card className="bg-[#DCFCE7]/50 border-[#BBF7D0]/50 col-span-2">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 text-[#22C55E]">🌱</div>
                          <div>
                            <p className="font-semibold">Dietary Options</p>
                            <p className="text-sm text-[#6B7280]">
                              Vegetarian & Vegan friendly
                            </p>
                            <p className="text-sm text-[#6B7280]">
                              Gluten-free options available
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <h2 className="text-2xl font-[Poppins] font-bold text-[#111827] mb-6 flex items-center">
            <ChefHat className="w-6 h-6 mr-2 text-[#F97316]" />
            Menu
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200 font-[Poppins]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-[#6B7280]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-3 py-3 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200 font-[Poppins]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-[#6B7280]">
            Showing {filteredDishes.length} item
            {filteredDishes.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid gap-4">
        {filteredDishes.map((dish, index) => (
          <Card
            key={dish.id}
            className="hover:shadow-lg transition-all duration-300 animate-[fade-in_0.3s_ease-out] pl-8"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CardContent className="p-4 ">
              <div className="grid md:grid-cols-4 gap-6 items-center max-w-7xl">
                {/* Dish Image */}
                <div className="relative h-50 bg-gradient-to-br from-[#F97316]/10 to-[#10B981]/10 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  {/* <div className="text-5xl opacity-50">🍽️</div> */}
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {dish.popular && (
                    <Badge className="absolute top-4 right-4 bg-[#10B981] text-[#FFFFFF] shadow-lg">
                      🔥 Popular
                    </Badge>
                  )}
                  <div className="absolute bottom-2 right-2 bg-[#FFFFFF]/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-xs font-bold text-[#111827]">
                      {dish.category}
                    </span>
                  </div>
                </div>

                {/* Dish Info */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-[Poppins] font-bold text-[#111827] mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-[#6B7280] mb-3 leading-relaxed">
                    {dish.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-[#F97316]">
                      ${dish.price}
                    </span>
                    <Badge className="bg-[#F3F4F6] text-[#111827]">
                      {dish.category}
                    </Badge>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(dish.id, -1)}
                      disabled={!quantities[dish.id]}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">
                      {quantities[dish.id] || 0}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(dish.id, 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90"
                    onClick={() => handleAddToCart(dish)}
                    disabled={!quantities[dish.id]}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredDishes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-[Poppins] font-semibold text-[#111827] mb-2">
            No dishes found
          </h3>
          <p className="text-[#6B7280]">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;
