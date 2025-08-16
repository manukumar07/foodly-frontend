import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("foodly-favorites");
    if (savedFavorites) {
      try {
        const favoritesData = JSON.parse(savedFavorites);
        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error loading favorites from localStorage:", error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("foodly-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  const toggleFavorite = (item) => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
