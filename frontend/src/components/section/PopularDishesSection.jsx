import React from "react";
import { dishes } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { Star, Plus, Heart, Leaf, Flame, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PopularDishesSection = () => {
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const popularDishes = dishes.filter((dish) => dish.popular);
  const navigate = useNavigate();

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
    toggleFavorite({
      id: dish.id,
      name: dish.name,
      type: "dish",
      image: dish.image,
      price: dish.price,
      restaurantName: dish.restaurantName,
    });

    if (isFavorite(dish.id)) {
      toast.error(`${dish.name} has been removed from your favorites.`);
    } else {
      toast.success(`${dish.name} has been added to your favorites.`);
    }
  };

  return (
    <section className="py-16 bg-[#FFFFFF] font-['Poppins']">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Popular Dishes
            </h2>
            <p className="text-[#6B7280] text-lg">
              Trending favorites everyone's ordering
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden sm:flex items-center border-[#E5E7EB] text-[#F97316] hover:bg-[#10B981]/40"
            onClick={() => navigate("/dishes")}
          >
            View All Dishes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDishes.slice(0, 4).map((dish, index) => (
            <div
              key={dish.id}
              className="group bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] hover:border-[#F97316]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                      ? "text-[#EF4444]"
                      : "text-[#6B7280] hover:text-[#EF4444]"
                  }`}
                  onClick={() => handleToggleFavorite(dish)}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite(dish.id) ? "fill-current" : ""
                    }`}
                  />
                </Button>

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {dish.vegetarian && (
                    <Badge className="bg-[#10B981] text-white text-xs">
                      <Leaf className="w-3 h-3 mr-1" />
                      Veg
                    </Badge>
                  )}
                  {dish.spicy && (
                    <Badge className="bg-[#EF4444] text-white text-xs">
                      <Flame className="w-3 h-3 mr-1" />
                      Spicy
                    </Badge>
                  )}
                </div>
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
                    className="bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-white"
                    onClick={() => handleAddToCart(dish)}
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Button
            variant="outline"
            className="w-full max-w-sm border-[#E5E7EB] text-[#111827]"
          >
            View All Dishes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDishesSection;
