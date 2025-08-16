import React from "react";
import { testimonials } from "@/data/mockData";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-[#FFFFFF] font-sans">
      <div className="mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Customers{" "}
            </span>
            Say
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Real experiences from real customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-6 hover:border-[#F97316] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#F973161A] rounded-full flex items-center justify-center group-hover:bg-[#F9731633] transition-colors duration-300">
                  <Quote className="w-6 h-6 text-[#F97316]" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FACC15] fill-[#FACC15]"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-center text-[#111827] mb-6 text-lg leading-relaxed">
                "{testimonial.message}"
              </blockquote>

              {/* Customer Name & Location */}
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-[#111827] text-lg">
                  {testimonial.name}
                </h4>
                <div className="inline-block mt-2 px-3 py-1 text-sm rounded-full border border-[#F9731633] bg-[#F973161A] text-[#F97316]">
                  📍 {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
