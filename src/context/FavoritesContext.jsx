import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesWrapper = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
