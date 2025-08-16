import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingCart, ShoppingBag } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    state,
    updateQuantity,
    removeItem,
    clearCart,
    deliveryFee,
    grandTotal,
  } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id, name) => {
    removeItem(id);
    toast.error(`${name} has been removed from your cart.`);
  };

  const handleCheckout = () => {
    toast.success(
      "Your order has been placed successfully. You'll receive a confirmation email shortly."
    );
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] font-[Poppins] py-16 flex items-center justify-center">
        <div className="max-w-md text-center space-y-6 animate-[fade-in-up_0.5s_ease-out]">
          {/* Cart Emoji / Icon */}
          <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center bg-[#F9FAFB] rounded-full shadow-md">
            <ShoppingCart className="w-14 h-14 text-[#F97316]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#111827]">
            Your cart is empty
          </h2>

          {/* Description */}
          <p className="text-[#6B7280] text-lg">
            Looks like you haven't added anything to your cart yet.
          </p>

          {/* Browse Button */}
          <Button
            asChild
            className="w-full py-3 text-white rounded-xl bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 shadow-lg transition-all duration-300"
          >
            <Link to="/restaurants">Browse Restaurants</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-12 font-[Poppins]">
      <div className="container mx-auto px-4 ">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 animate-[fade-in-up_0.5s_ease-out]">
            <h1 className="text-3xl md:text-4xl font-bold text-[#515662] mb-2">
              Your{" "}
              <span className="bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#10B981] bg-clip-text text-transparent">
                Cart
              </span>
            </h1>
            <p className="text-[#6B7280]">
              {state.itemCount} item{state.itemCount !== 1 ? "s" : ""} in your
              cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-[Poppins]">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F9FAFB] rounded-[0.5rem] border border-[#E5E7EB] p-4 hover:border-[#F97316]/50 transition-all duration-200 vg-[fade-in-up_0.5s_ease-out]"
                >
                  <div className="flex items-center space-x-4">
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#F97316]/10 to-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-3xl">🍽️</div>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#111827] text-lg truncate">
                        {item.name}
                      </h3>
                      <p className="text-[#6B7280] text-sm">
                        from {item.restaurantName}
                      </p>
                      <div className="text-[#F97316] font-bold text-lg mt-1">
                        ${item.price}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-[#E5E7EB] text-[#111827]"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="w-4 h-4" />
                      </Button>

                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-sm bg-[#F3F4F6] text-[#111827]"
                      >
                        {item.quantity}
                      </Badge>

                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-[#E5E7EB] text-[#111827]"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#EF4444] hover:bg-[#EF4444]/10 flex-shrink-0"
                      onClick={() => handleRemoveItem(item.id, item.name)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}

              {/* Clear Cart */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="text-[#EF4444] hover:bg-[#EF4444]/10"
                  onClick={() => {
                    clearCart();
                    toast.success(
                      "Cart cleared! All items have been removed from your cart."
                    );
                  }}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}

            <div className="lg:col-span-1">
              <div className="bg-[#F9FAFB] rounded-[0.5rem] border border-[#E5E7EB] p-6 sticky top-8 vg-[fade-in-up_0.5s_ease-out] font-[Poppins]">
                <h3 className="text-xl font-semibold text-[#111827] mb-4 font-[Poppins] vg-[fade-in-up_0.5s_ease-out] flex items-center gap-2">
                  <span className="text-[#F97316] text-lg">📄</span>
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Subtotal</span>
                    <span className="font-medium text-[#111827]">
                      ${state.total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Delivery Fee</span>
                    <span className="font-medium text-[#111827]">
                      ${deliveryFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-[#E5E7EB] pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-[#111827]">
                        Total
                      </span>
                      <span className="text-lg font-bold text-[#F97316]">
                        ${grandTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Estimated Delivery */}
                <div className="bg-[#F97316]/5 rounded-[0.5rem] p-4 mb-6 font-[Poppins] vg-[fade-in-up_0.5s_ease-out]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-[#111827]">
                        Estimated Delivery
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[#F97316]">
                      15-25 min
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 text-lg py-4 flex items-center justify-center"
                  onClick={handleCheckout}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-center">
                  <Link to="/restaurants">
                    <Button
                      variant="ghost"
                      className="text-[#F97316] hover:text-[#F97316]"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
                {/* Promo Code */}
                <div className="mt-4 pt-4 border-t border-[#E5E7EB] vg-[fade-in-up_0.5s_ease-out] font-[Poppins]">
                  <p className="text-sm text-[#6B7280] text-center">
                    🎉 Add $5 more for free delivery!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
