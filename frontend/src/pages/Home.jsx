import CategorySection from "@/components/section/CategorySection";
import CTASection from "@/components/section/CTASection";
import FeaturesSection from "@/components/section/FeaturesSection";
import HeroSection from "@/components/section/HeroSection";
import HowItWorksSection from "@/components/section/HowItWorksSection";
import PopularDishesSection from "@/components/section/PopularDishesSection";
import PopularRestaurantsSection from "@/components/section/PopularRestaurantsSection";
import StatsSection from "@/components/section/StatsSection";
import TestimonialsSection from "@/components/section/TestimonialsSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <PopularDishesSection />
      <PopularRestaurantsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
