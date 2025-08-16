import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChefHat,
  Users,
  Clock,
  Award,
  Heart,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

// Example data arrays
const stats = [
  { number: "500+", label: "Partner Restaurants", icon: ChefHat },
  { number: "50K+", label: "Happy Customers", icon: Users },
  { number: "25 min", label: "Average Delivery", icon: Clock },
  { number: "4.8★", label: "Customer Rating", icon: Award },
];

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make puts our customers at the center. Your satisfaction is our success.",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description:
      "We leverage technology to deliver your favorite meals faster than ever before.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "We partner only with restaurants that meet our strict quality and safety standards.",
  },
  {
    icon: Globe,
    title: "Community Focus",
    description:
      "Supporting local restaurants and bringing communities together through great food.",
  },
];

const team = [
  {
    name: "Manu Kumar Pal",
    role: "Full Stack Developer",
    image: "👨‍💼",
    description:
      "Building robust web applications and seamless user experiences across both frontend and backend.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-[Poppins]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F97316]/5 via-[#FFFFFF] to-[#10B981]/5 py-20">
        <div className="container mx-auto px-4 text-center  max-w-7xl">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-[#F97316]/10 text-[#F97316] px-6 py-2">
              About Foodly
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#111827] mb-6">
              Bringing{" "}
              <span className="bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
                Communities
              </span>{" "}
              Together Through Food
            </h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Founded in 2025, Foodly has grown from a simple idea to
              revolutionize food delivery into a platform that connects food
              lovers with their favorite local restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4  max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#10B981] rounded-2xl mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#111827] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#6B7280]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
              To make delicious, quality food accessible to everyone by
              connecting local restaurants with hungry customers through
              innovative technology and exceptional service.
            </p>
            <Card className="bg-gradient-to-r from-[#F97316]/5 to-[#10B981]/5 border border-[#F97316]/20">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-medium text-[#111827] italic">
                  "Great food should be just a few taps away. We're here to make
                  that happen, one delivery at a time."
                </blockquote>
                <cite className="text-[#F97316] font-semibold mt-4 block">
                  - Manu Kumar Pal, Full Stack developer
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4  max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[#6B7280]">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#F97316]/10 rounded-2xl mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[#F97316]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4  max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#6B7280]">
              The passionate people behind Foodly
            </p>
          </div>

          <div
            className={`grid gap-6 ${
              team.length === 1
                ? "grid-cols-1 justify-items-center"
                : "md:grid-cols-2 lg:grid-cols-2 justify-items-stretch" // Multiple cards → normal
            }`}
          >
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#F97316] font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F97316]/5 to-[#10B981]/5">
        <div className="container mx-auto px-4 text-center  max-w-7xl">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to experience Foodly?
            </h2>
            <p className="text-xl text-[#6B7280] mb-8">
              Join thousands of happy customers who trust Foodly for their food
              delivery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 px-8 text-white"
                asChild
              >
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#F97316] hover:bg-[#F97316] hover:text-white px-8"
                asChild
              >
                <Link to="/restaurants">Browse Restaurants</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
