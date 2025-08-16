import React from "react";
import { Link } from "react-router-dom";
import {
  ChefHat,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Restaurants", path: "/restaurants" },
    { name: "Categories", path: "/dishes" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const popularCategories = [
    "Indian",
    "Italian",
    "Chinese",
    "Burgers",
    "Sushi",
    "Mexican",
  ];

  return (
    <footer className="bg-[#F9FAFB] dark:bg-[#FFFFFF] border-t border-[#E5E7EB] font-['Poppins','Inter',ui-sans-serif,system-ui]">
      <div className="mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#10B981] rounded-xl">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
                Foodly
              </span>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              Delivering delicious food from your favorite restaurants, fast and
              fresh to your doorstep.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#F97316]"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#F97316]"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#F97316]"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#F97316]"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#111827]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#6B7280] hover:text-[#F97316] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#111827]">
              Popular Categories
            </h3>
            <ul className="space-y-2">
              {popularCategories.map((category) => (
                <li key={category}>
                  <span className="text-[#6B7280] hover:text-[#F97316] transition-colors duration-200 cursor-pointer">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#111827]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#6B7280]">
                <Phone className="w-5 h-5 text-[#F97316]" />
                <span>+91 981785XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-[#6B7280]">
                <Mail className="w-5 h-5 text-[#F97316]" />
                <span>demo@foodly.com</span>
              </div>
              <div className="flex items-center space-x-3 text-[#6B7280]">
                <MapPin className="w-5 h-5 text-[#F97316]" />
                <span>123 Food Street, YNR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-[#6B7280] text-sm">
            © 2025 Foodly. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-[#6B7280] hover:text-[#F97316] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#6B7280] hover:text-[#F97316] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-[#6B7280] hover:text-[#F97316] transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
