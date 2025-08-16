import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart, Truck, Star } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Browse & Search",
      description:
        "Discover restaurants and dishes in your area. Filter by cuisine, rating, or delivery time.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: ShoppingCart,
      number: "02",
      title: "Add to Cart",
      description:
        "Select your favorite dishes, customize them, and add to your cart with just a few clicks.",
      color: "from-primary to-orange-600",
    },
    {
      icon: Truck,
      number: "03",
      title: "Fast Delivery",
      description:
        "Sit back and relax while we prepare and deliver your food hot and fresh to your doorstep.",
      color: "from-accent to-green-600",
    },
    {
      icon: Star,
      number: "04",
      title: "Enjoy & Rate",
      description:
        "Enjoy your delicious meal and rate your experience to help other food lovers.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-[#F9FAFB] font-['Poppins','Inter',ui-sans-serif,system-ui]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Foodly
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Getting your favorite food delivered is easier than ever. Just
            follow these simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="h-full border-2 border-[#E5E7EB] hover:border-[#F97316]/50 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  {/* Step Icon */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#111827] text-[#FFFFFF] rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#f88c40] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-px bg-gradient-to-r from-[#F97316]/30 to-[#10B981]/30 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#F97316]">25 min</div>
              <div className="text-[#6B7280]">Average delivery time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#10B981]">500+</div>
              <div className="text-[#6B7280]">Restaurant partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#F97316]">24/7</div>
              <div className="text-[#6B7280]">Available for you</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
