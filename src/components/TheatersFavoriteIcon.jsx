import { useContext, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { StarHollow } from "./StarHollow";
import { StarFilled } from "./StarFilled";

export const TheatersFavoriteIcon = ({ theaterId }) => {
  const { favorites } = useContext(FavoritesContext);

  if (favorites) {
    const result = favorites.find(({ id }) => id === theaterId);
    if (result) {
      return <StarFilled />;
    } else {
      return <StarHollow />;
    }
  } else {
    return <StarHollow />;
  }
};
