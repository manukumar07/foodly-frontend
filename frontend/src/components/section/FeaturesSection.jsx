import React from "react";
import { Shield, Zap, Heart, Gift, MapPin, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Get your food delivered in 30 minutes or less with our optimized delivery network",
      color: "from-[#FACC15] to-[#F97316]", // yellow → orange
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "Your payments and personal data are protected with bank-level security",
      color: "from-[#10B981] to-[#059669]", // green → darker green
    },
    {
      icon: Heart,
      title: "Quality Assured",
      description:
        "We partner only with restaurants that meet our strict quality standards",
      color: "from-[#EF4444] to-[#EC4899]", // red → pink
    },
    {
      icon: Gift,
      title: "Great Deals",
      description:
        "Enjoy exclusive discounts, combo offers, and loyalty rewards every day",
      color: "from-[#8B5CF6] to-[#6366F1]", // purple → indigo
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description:
        "We deliver to every corner of the city with our extensive network",
      color: "from-[#3B82F6] to-[#06B6D4]", // blue → cyan
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description:
        "Order anytime, anywhere. Our platform never sleeps so you never go hungry",
      color: "from-[#F97316] to-[#10B981]", // orange → green
    },
  ];

  return (
    <section className="py-20 bg-[#FFFFFF] font-['Poppins','Inter',ui-sans-serif,system-ui]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Foodly
            </span>
            ?
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Experience the perfect blend of speed, quality, and convenience that
            makes us the #1 choice for food delivery
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#F9FAFB] rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#F97316]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Text */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#F97316] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
