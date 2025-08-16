import React from "react";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Heart, Star, Clock, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addItem } = useCart();

  const restaurants = favorites.filter((item) => item.type === "restaurant");
  const dishes = favorites.filter((item) => item.type === "dish");

  const handleAddToCart = (dish) => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      restaurantName: dish.restaurantName,
    });

    toast.success(`${dish.name} has been added to your cart.`, {
      icon: "🛒",
    });
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] py-8 font-['Poppins','Inter',ui-sans-serif,system-ui] animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center py-16">
            <div className="text-8xl mb-6">💝</div>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">
              No favorites yet
            </h2>
            <p className="text-[#6B7280] mb-8">
              Start adding restaurants and dishes to your favorites
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-[#F97316] to-[#10B981] text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              <Link to="/restaurants">Browse Restaurants</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-8 font-['Poppins','Inter',ui-sans-serif,system-ui]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#515662] mb-2">
            Your{" "}
            <span className="bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Favorites
            </span>
          </h1>
          <p className="text-[#6B7280]">
            {favorites.length} favorite{favorites.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="space-y-8 font-[Poppins]">
          {/* Favorite Restaurants */}
          {restaurants.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#111827] mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🏪</span>
                </div>
                Favorite Restaurants
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant, index) => (
                  <div
                    key={restaurant.id}
                    className="bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] hover:border-[#F97316]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group animate-[fade-in_0.3s_ease-out]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Restaurant Image */}
                    <div className="relative h-32 bg-gradient-to-br from-[#F97316]/10 to-[#10B981]/10 flex items-center justify-center">
                      <div className="text-4xl opacity-30">🏪</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-[#EF4444] bg-[#FFFFFF]/90 backdrop-blur-sm hover:scale-110 transition-all duration-200"
                        onClick={() => removeFromFavorites(restaurant.id)}
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </Button>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-bold text-lg text-[#111827] group-hover:text-[#F97316] transition-colors">
                          {restaurant.name}
                        </h3>
                        <p className="text-[#6B7280] text-sm">
                          {restaurant.cuisine}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">
                              {restaurant.rating}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-[#6B7280]" />
                            <span>{restaurant.deliveryTime}</span>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-[#FFFFFF]"
                        >
                          View Menu
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Favorite Dishes */}
          {dishes.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#111827] mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#10B981] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🍽️</span>
                </div>
                Favorite Dishes
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dishes.map((dish, index) => (
                  <div
                    key={dish.id}
                    className="bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] hover:border-[#F97316]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group animate-[fade-in_0.3s_ease-out]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Dish Image */}
                    <div className="relative h-32 bg-gradient-to-br from-[#F97316]/10 to-[#10B981]/10 flex items-center justify-center">
                      <div className="text-4xl opacity-30">🍽️</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-[#EF4444] bg-[#FFFFFF]/90 backdrop-blur-sm hover:scale-110 transition-all duration-200"
                        onClick={() => removeFromFavorites(dish.id)}
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </Button>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-bold text-lg text-[#111827] group-hover:text-[#F97316] transition-colors">
                          {dish.name}
                        </h3>
                        <p className="text-[#6B7280] text-sm">
                          from {dish.restaurantName}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-[#F97316]">
                          ${dish.price}
                        </span>
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(dish)}
                          className="bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 hover:scale-105 transition-all duration-200"
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
