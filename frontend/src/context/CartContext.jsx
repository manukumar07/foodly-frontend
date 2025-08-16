import React, { createContext, useContext, useReducer, useEffect } from "react";

// Initial state for the cart
const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  let newItems;

  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      break;

    case "REMOVE_ITEM":
      newItems = state.items.filter((item) => item.id !== action.payload);
      break;

    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        newItems = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      break;

    case "CLEAR_CART":
      newItems = [];
      break;

    case "LOAD_CART":
      newItems = action.payload;
      break;

    default:
      return state;
  }

  const total = newItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = newItems.reduce((count, item) => count + item.quantity, 0);

  return {
    items: newItems,
    total,
    itemCount,
  };
};

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const deliveryFee = state.items.length > 0 ? 2.99 : 0;
  const grandTotal = state.total + deliveryFee;

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("foodly-cart");
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: cartItems });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("foodly-cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    deliveryFee,
    grandTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
