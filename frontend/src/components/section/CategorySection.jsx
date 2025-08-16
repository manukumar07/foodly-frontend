import React from "react";
import { categories } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();

  const scrollContainer = (direction) => {
    const container = document.getElementById("categories-container");
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-[#F9FAFB] dark:bg-[#1F2937] font-['Poppins','Inter',ui-sans-serif,system-ui]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] animate-[fade-in-up_0.5s_ease-out]">
              Browse by Category
            </h2>
            <p className="text-[#6B7280] text-lg animate-[fade-in_0.3s_ease-out]">
              What are you craving today?
            </p>
          </div>

          <Button
            variant="outline"
            className="hidden sm:flex items-center border-[#E5E7EB] text-[#F97316] hover:bg-[#10B981]/40"
            onClick={() => navigate("/dishes")}
          >
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Categories Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FFFFFF]/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 hidden md:flex hover:bg-amber-500"
            onClick={() => scrollContainer("left")}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FFFFFF]/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 hidden md:flex hover:bg-amber-500"
            onClick={() => scrollContainer("right")}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Categories Grid */}
          <div
            id="categories-container"
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 md:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="flex-shrink-0 group cursor-pointer animate-[fade-in_0.3s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-[#FFFFFF] dark:bg-[#374151] rounded-[0.5rem] border border-[#E5E7EB] hover:border-[#F97316]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden w-48">
                  {/* Category Image */}
                  <div className="relative h-32 bg-gradient-to-br from-[#F97316]/10 to-[#10B981]/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Category Info */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-md text-[#111827] group-hover:text-[#F97316] transition-colors text-center">
                      {category.name}
                    </h3>
                    <h4 className="bg-[#F97316]/10 text-[#F97316] hover:bg-[#F97316]/20 flex justify-center items-center px-2 py-1 rounded text-center">
                      {category.restaurantCount} places
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Button
            variant="outline"
            className="w-full max-w-sm"
            onClick={() => navigate("/dishes")}
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
