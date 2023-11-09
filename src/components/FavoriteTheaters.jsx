import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { ShowtimesContext } from "../context/ShowtimesProvider";
import { useContext } from "react";
import { TheaterFavoriteButton } from "./TheaterFavoriteButton";

export const FavoriteTheaters = () => {
  const { favorites } = useContext(FavoritesContext);
  const { getShowtimes } = useContext(ShowtimesContext);
  const navigate = useNavigate();

  const favoriteTheaters = Object.values(favorites).map(({ id, name }) => {
    return (
      <div key={id} className="relative">
        <div className="absolute top-3 right-3">
          <TheaterFavoriteButton id={id} name={name} />
        </div>
        <button
          onClick={(e) => {
            console.log("clicked");
            e.preventDefault();
            getShowtimes(id);
            sessionStorage.setItem("theaterName", name);
            navigate("/showtimes");
          }}
          className={`bg-blue text-center min-h-[100px] py-5 transition hover:shadow-2xl rounded-lg flex`}
        >
          <h3 className="text-white text-2xl m-auto px-16">{name}</h3>
        </button>
      </div>
    );
  });

  return <>{favoriteTheaters}</>;
};
