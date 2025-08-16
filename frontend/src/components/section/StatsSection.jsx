import React from "react";
import { Trophy, Users, Clock, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Active Users",
      description: "People trust us daily",
      color: "from-[#F97316] to-[#F97316CC]",
    },
    {
      icon: Trophy,
      number: "1M+",
      label: "Orders Delivered",
      description: "Successfully completed",
      color: "from-[#10B981] to-[#10B981CC]",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      description: "Customer satisfaction",
      color: "from-[#FACC15] to-[#FBBF24]", // yellow gradient
    },
    {
      icon: Clock,
      number: "98%",
      label: "On-Time Delivery",
      description: "Delivered within promise",
      color: "from-[#10B981] to-[#34D399]", // green gradient
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#F97316]/10 to-[#10B981]/5 font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-2xl animate-pulse bg-[#F97316]/10"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-2xl animate-pulse bg-[#10B981]/10 animate-delay-[1s]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              thousands
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#6B7280]">
            Join our growing community of food lovers and experience the best
            food delivery service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in bg-white/80 backdrop-blur-sm border border-[#E5E7EB]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${stat.color}`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#111827]">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-[#111827]">
                  {stat.label}
                </div>
                <div className="text-sm text-[#6B7280]">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
