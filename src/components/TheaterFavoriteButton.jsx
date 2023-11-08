import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { TheatersFavoriteIcon } from "./TheatersFavoriteIcon";

export const handleFavClick = async (theaterId, name, setFavorites) => {
  const data = await JSON.parse(localStorage.getItem("favorites"));
  let storedFavorites = [];

  if (data) {
    storedFavorites = data;
  }

  if (storedFavorites.length > 0) {
    const result = storedFavorites.find(({ id }) => id === theaterId);
    if (result) {
      const filteredFavorites = storedFavorites.filter(
        (item) => item.id !== result.id
      );
      storedFavorites = filteredFavorites;
    } else {
      storedFavorites.push({ id: theaterId, name: name });
    }
  } else {
    storedFavorites.push({ id: theaterId, name: name });
  }
  localStorage.setItem("favorites", JSON.stringify(storedFavorites));
  setFavorites(storedFavorites);
};

export const TheaterFavoriteButton = ({ id, name }) => {
  const { setFavorites } = useContext(FavoritesContext);

  return (
    <button
      key={id}
      className="w-[32px] h-[30px]"
      onClick={(e) => {
        e.preventDefault();
        handleFavClick(id, name, setFavorites);
      }}
    >
      <TheatersFavoriteIcon theaterId={id} />
    </button>
  );
};
