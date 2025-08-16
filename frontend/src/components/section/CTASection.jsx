import React from "react";
import { Download, Smartphone, Star, Zap, Gift } from "lucide-react";

const CTASection = () => {
  const features = [
    { icon: Zap, text: "Order in seconds" },
    { icon: Star, text: "Track in real-time" },
    { icon: Gift, text: "Exclusive deals" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F97316]/10 via-[#FFFFFF] to-[#10B981]/10 relative overflow-hidden font-[Poppins]">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#F97316]/5 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-40 h-40 bg-[#10B981]/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className=" mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <span className="inline-block mb-4 bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-md font-medium">
                  Download Our App
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
                  Get the best experience with our{" "}
                  <span className="bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
                    mobile app
                  </span>
                </h2>
                <p className="text-xl text-[#6B7280] leading-relaxed">
                  Enjoy faster ordering, exclusive app-only deals, and real-time
                  tracking. Download now and get 20% off your first order!
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] hover:border-[#F97316]/50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-[#F97316]/10 rounded-lg">
                      <feature.icon className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <span className="font-medium text-[#111827]">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black hover:bg-black/90 text-white h-14 px-6 rounded-xl flex items-center space-x-3">
                  <Download className="w-4 h-4" />
                  <div className="text-2xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-black hover:bg-black/90 text-white h-14 px-6 rounded-xl flex items-center space-x-3">
                  <Download className="w-4 h-4" />
                  <div className="text-2xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Web CTA */}
              <div className="p-6 bg-gradient-to-r from-[#F97316]/5 to-[#10B981]/5 rounded-2xl border border-[#F97316]/20">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  Prefer ordering on the web?
                </h3>
                <p className="text-[#6B7280] mb-4">
                  Start browsing restaurants and build your first order right
                  now!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 text-white px-6 py-3 rounded-xl">
                    Browse Restaurants
                  </button>
                  <button className="border border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white px-6 py-3 rounded-xl">
                    Create Account
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div
                className="relative mx-auto w-64 h-96 rounded-3xl p-2 shadow-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom right, #F97316, #10B981)",
                }}
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden relative"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  {/* Phone Screen Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div
                        className="text-sm font-bold"
                        style={{ color: "#111827" }}
                      >
                        Foodly
                      </div>
                      <div
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: "#F97316", opacity: 0.2 }}
                      ></div>
                    </div>

                    {/* Search Bar */}
                    <div
                      className="h-10 rounded-lg flex items-center px-3"
                      style={{ backgroundColor: "#F9FAFB" }}
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: "#6B7280", opacity: 0.2 }}
                      ></div>
                      <div
                        className="ml-2 h-2 rounded flex-1"
                        style={{ backgroundColor: "#6B7280", opacity: 0.2 }}
                      ></div>
                    </div>

                    {/* Restaurant Cards */}
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg shadow-sm"
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #E5E7EB",
                        }}
                      >
                        <div className="flex space-x-3">
                          <div
                            className="w-12 h-12 rounded-lg"
                            style={{ backgroundColor: "#F97316", opacity: 0.2 }}
                          ></div>
                          <div className="flex-1 space-y-1">
                            <div
                              className="h-3 rounded w-3/4"
                              style={{
                                backgroundColor: "#111827",
                                opacity: 0.2,
                              }}
                            ></div>
                            <div
                              className="h-2 rounded w-1/2"
                              style={{
                                backgroundColor: "#6B7280",
                                opacity: 0.2,
                              }}
                            ></div>
                            <div className="flex space-x-2">
                              <div
                                className="h-2 rounded w-8"
                                style={{
                                  backgroundColor: "#10B981",
                                  opacity: 0.4,
                                }}
                              ></div>
                              <div
                                className="h-2 rounded w-12"
                                style={{
                                  backgroundColor: "#F97316",
                                  opacity: 0.4,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating App Icons */}
                  <div
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg animate-bounce"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #F97316, #10B981)",
                    }}
                  >
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg animate-bounce"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #10B981, #F97316)",
                      animationDelay: "0.5s",
                    }}
                  >
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute top-8 -left-8 rounded-lg shadow-lg p-2 animate-bounce-gentle"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: "#10B981", opacity: 0.2 }}
                  ></div>
                  <div>
                    <div
                      className="h-2 rounded w-12 mb-1"
                      style={{ backgroundColor: "#111827", opacity: 0.2 }}
                    ></div>
                    <div
                      className="h-1 rounded w-8"
                      style={{ backgroundColor: "#6B7280", opacity: 0.2 }}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-12 -right-8 rounded-lg shadow-lg p-2 animate-bounce-gentle"
                style={{
                  backgroundColor: "#FFFFFF",
                  animationDelay: "1s",
                  color: "#F97316",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                🎉 20% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
