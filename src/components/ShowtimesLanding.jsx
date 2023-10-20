import { TitleLargeWhite } from "./TitleLargeWhite";
import { useContext, useEffect } from "react";
import { ShowtimesContext } from "../context/ShowtimesProvider";
import { MovieCard } from "./MovieCard/MovieCard";

export const ShowtimesLanding = () => {
  const { isLoading, showtimes } = useContext(ShowtimesContext);

  return (
    <section className="grid grid-cols-1 gap-10 max-w-6xl lg:px-0 px-4 py-10 mx-auto relative">
      {isLoading ? (
        <TitleLargeWhite title="Loading..." />
      ) : (
        <MovieCard showtimes={showtimes} />
      )}
    </section>
  );
};
