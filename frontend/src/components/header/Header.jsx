import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Menu, X, ChefHat, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

// Navigation items
const navItems = [
  { name: "Home", path: "/" },
  { name: "Restaurants", path: "/restaurants" },
  { name: "Dishes", path: "/dishes" },
  { name: "Favorites", path: "/favorites" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state: cartState } = useCart();
  const location = useLocation();
  const { favorites } = useFavorites();

  // Check if path is active
  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // Render navigation link
  const renderNavLink = (item) => (
    <li key={item.path}>
      <Link
        to={item.path}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`px-4 py-2 rounded-lg text-sm font-medium relative block transition-all duration-200 ${
          isActive(item.path)
            ? "text-[#F97316] bg-[#F97316]/10"
            : "text-[#111827]"
        }`}
      >
        {item.name}
        {isActive(item.path) && (
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#F97316]" />
        )}
      </Link>
    </li>
  );

  return (
    <header
      className="sticky top-0 z-50 border-b bg-[#FFFFFF] border-[#E5E7EB]"
      style={{ fontFamily: '"Poppins", "Inter", ui-sans-serif, system-ui' }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-200 group-hover:scale-105 bg-gradient-to-br from-[#F97316] to-[#10B981]">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#10B981]">
              Foodly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {navItems.map(renderNavLink)}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Favorites */}
            <Link to="/favorites">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <Badge
                    className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center text-xs px-1"
                    variant="destructive"
                  >
                    {favorites.length}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartState.itemCount > 0 && (
                  <Badge
                    className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center text-xs px-1"
                    variant="destructive"
                  >
                    {cartState.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link to="/login" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 text-[#111827] border-[#E5E7EB] 
                 hover:border-[#F97316] hover:bg-[#F97316] hover:text-white transition-all duration-200"
                >
                  <User className="w-2 h-2" />
                  Login
                </Button>
              </Link>

              {/* Sign Up Button */}
              <Link to="/signup" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 text-white bg-gradient-to-r 
                 from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 
                 transition-all duration-200"
                >
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in border-[#E5E7EB]">
            <ul className="flex flex-col space-y-2">
              {navItems.map(renderNavLink)}
            </ul>

            {/* Mobile Auth */}
            <div className="border-t pt-2 mt-2 border-[#E5E7EB] px-4 flex flex-col space-y-2">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center text-[#111827] border-[#E5E7EB] gap-2 hover:border-[#F97316] hover:bg-[#F97316] hover:text-white transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#10B981] text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
