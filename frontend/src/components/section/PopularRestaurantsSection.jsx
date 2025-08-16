import React from "react";
import { restaurants } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useFavorites } from "@/context/FavoritesContext";
import { Star, Clock, Heart, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PopularRestaurantsSection = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();

  const handleToggleFavorite = (restaurant) => {
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

    toast.success(
      isFavorite(restaurant.id)
        ? `${restaurant.name} removed from favorites`
        : `${restaurant.name} added to favorites`
    );
  };

  return (
    <section className='py-16 bg-[#F9FAFB] dark:bg-[#1F2937] font-["Poppins","Inter",ui-sans-serif,system-ui]'>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-[#FFFFFF]">
              Popular Restaurants
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#D1D5DB]">
              Discover the most loved restaurants in your area
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden sm:flex items-center border-[#E5E7EB] text-[#F97316] hover:bg-[#10B981]/40"
            onClick={() => navigate("/restaurants")}
          >
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.slice(0, 6).map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="group bg-[#FFFFFF] dark:bg-[#374151] rounded-[0.5rem] border border-[#E5E7EB] dark:border-[#4B5563] hover:border-[#F97316]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  className={`absolute top-3 right-3 bg-[#FFFFFF]/90 dark:bg-[#1F2937]/90 backdrop-blur-sm hover:scale-110 transition-all duration-200 ${
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
                  <Badge className="absolute top-3 left-3 bg-[#F97316] text-[#FFFFFF]">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Restaurant Info */}
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-xl text-[#111827] dark:text-[#FFFFFF] group-hover:text-[#F97316] transition-colors">
                    {restaurant.name}
                  </h3>
                  <p className="text-[#6B7280] dark:text-[#D1D5DB]">
                    {restaurant.cuisine}
                  </p>
                </div>

                {/* Rating and Delivery Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[#6B7280] dark:text-[#D1D5DB]">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                </div>

                {/* Delivery Fee and CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <div className="text-sm text-[#6B7280] dark:text-[#D1D5DB]">
                      {restaurant.deliveryFee} delivery
                    </div>
                    <div className="flex gap-1">
                      {restaurant.categories.slice(0, 2).map((category) => (
                        <Badge
                          key={category}
                          variant="secondary"
                          className="text-xs bg-[#F3F4F6] dark:bg-[#4B5563] text-[#111827] dark:text-[#FFFFFF]"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-[#F97316] group-hover:text-[#FFFFFF] group-hover:border-[#F97316] border-[#E5E7EB] text-[#111827] dark:border-[#4B5563] dark:text-[#FFFFFF]"
                    asChild
                  >
                    <Link to={`/restaurant/${restaurant.id}`}>
                      View Menu
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
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
            className="w-full max-w-sm border-[#E5E7EB] text-[#111827] hover:border-[#F97316] hover:text-[#F97316]"
            asChild
          >
            <Link to="/restaurants">View All Restaurants</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurantsSection;
