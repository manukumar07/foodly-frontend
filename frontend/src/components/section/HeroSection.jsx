import React, { useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  Star,
  Zap,
  ShoppingCart,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    { icon: Zap, text: "Fast Delivery", color: "text-primary" },
    { icon: Star, text: "Top Rated", color: "text-primary" },
    { icon: Clock, text: "Best Prices", color: "text-primary" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#F97316]/10 via-[#FFFFFF] to-[#10B981]/10 py-20 lg:py-32 overflow-hidden font-['Poppins','Inter',ui-sans-serif,system-ui]">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-40 h-40 bg-gradient-to-r from-[#F97316]/20 to-[#10B981]/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div
          className="absolute bottom-10 right-5 w-60 h-60 bg-gradient-to-l from-[#10B981]/15 to-[#F97316]/15 rounded-full blur-3xl animate-pulse opacity-40"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#F97316]/10 rounded-full blur-2xl animate-bounce opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-[#10B981]/10 rounded-full blur-xl animate-[bounce-gentle_2s_ease-in-out_infinite]"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(229,231,235,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-[fade-in-up_0.5s_ease-out]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#10B981] bg-clip-text text-transparent">
                Delicious food,
              </span>
              <br />
              <span className="text-[#111827]">delivered fast</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              Discover amazing restaurants in your area and get your favorite
              meals delivered in minutes
            </p>
          </div>

          {/* Search Bar */}
          <div
            className="max-w-2xl mx-auto animate-[fade-in-up_0.5s_ease-out]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <Search className="w-5 h-5 text-[#6B7280]" />
                <div className="h-4 w-px bg-[#E5E7EB]"></div>
                <MapPin className="w-5 h-5 text-[#F97316]" />
              </div>
              <input
                type="text"
                placeholder="Search restaurants, cuisines, or dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-20 pr-6 py-4 bg-[#FFFFFF] border-2 border-[#E5E7EB] rounded-2xl focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 transition-all duration-200 text-lg shadow-lg"
              />
              <Button
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 rounded-xl px-8"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Feature Badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-[fade-in-up_0.5s_ease-out]"
            style={{ animationDelay: "0.4s" }}
          >
            {features.map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 bg-[#FFFFFF]/80 backdrop-blur-sm border border-[#E5E7EB] hover:border-[#F97316]/50 transition-all duration-200 group cursor-pointer"
              >
                <feature.icon
                  className={`w-6 h-6 mr-2 ${feature.color} transition-transform duration-200 group-hover:scale-110 group-hover:animate-bounce-up`}
                />
                <span className="font-medium">{feature.text}</span>
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fade-in-up_0.5s_ease-out]"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 shadow-lg hover:shadow-xl transition-all duration-200 px-8 flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Order Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#E5E7EB] hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 px-8 flex items-center gap-2"
            >
              <Coffee className="w-5 h-5" />
              Browse Restaurants
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-10 animate-[fade-in-up_0.5s_ease-out]"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F97316]/20 to-[#F97316]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl">🏪</div>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-[#6B7280] font-medium">Restaurants</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl">😊</div>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#10B981] to-[#F97316] bg-clip-text text-transparent">
                10k+
              </div>
              <div className="text-[#6B7280] font-medium">Happy Customers</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F97316]/20 to-[#10B981]/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl">⚡</div>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
                25 min
              </div>
              <div className="text-[#6B7280] font-medium">Avg Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
