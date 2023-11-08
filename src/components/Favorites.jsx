import { useContext } from "react";
import { Subheading } from "./Subheading";
import { FavoritesContext } from "../context/FavoritesContext";
import { FavoriteTheaters } from "./FavoriteTheaters";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  if (!favorites) {
    return null;
  }
  if (favorites.length > 0) {
    return (
      <section>
        <Subheading text="Favorites" />
        <div className="grid gap-5 md:grid-cols-4 justify-items-center">
          <FavoriteTheaters />
        </div>
      </section>
    );
  }
  return null;
};
