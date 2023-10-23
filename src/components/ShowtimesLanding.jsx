import { TitleLargeWhite } from "./TitleLargeWhite";
import { useContext } from "react";
import { ShowtimesContext } from "../context/ShowtimesProvider";
import { MovieCard } from "./MovieCard/MovieCard";
import { ThreeCircles } from "react-loader-spinner";

export const ShowtimesLanding = () => {
  const { isLoading, showtimes, errorOccurred } = useContext(ShowtimesContext);
  const showtimesST = JSON.parse(sessionStorage.getItem("showtimes"));

  if (isLoading) {
    return (
      <>
        <TitleLargeWhite title="Loading" classes="text-center" />
        <div className="mx-auto">
          <ThreeCircles height="100" color="#FFFFFF" />
        </div>
      </>
    );
  } else {
    if (errorOccurred || !showtimesST) {
      return (
        <TitleLargeWhite
          title="Uh oh, something went wrong. Try again later"
          classes="text-center"
        />
      );
    } else {
      return <MovieCard showtimes={showtimesST ? showtimesST : showtimes} />;
    }
  }
};
