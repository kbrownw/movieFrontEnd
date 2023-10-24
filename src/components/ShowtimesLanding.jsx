import { TitleLargeWhite } from "./TitleLargeWhite";
import { useContext } from "react";
import { ShowtimesContext } from "../context/ShowtimesProvider";
import { MovieCard } from "./MovieCard/MovieCard";
import { Loading } from "./Loading";
import { ShowtimesTheaterHeader } from "./ShowtimesTheaterHeader";
import { BackButton } from "./BackButton";

export const ShowtimesLanding = () => {
  const { isLoading, showtimes, errorOccurred } = useContext(ShowtimesContext);
  const showtimesST = JSON.parse(sessionStorage.getItem("showtimes"));

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  if (!isLoading) {
    scrollToTop();
  }
  if (isLoading) {
    return <Loading />;
  } else {
    if (errorOccurred || !showtimesST) {
      return (
        <section className="grid grid-cols-1 items-center z-10 pt-5">
          <TitleLargeWhite
            title="Uh oh, something went wrong. Try again later"
            classes="text-center"
          />
          <div className="grid grid-cols-1 mx-auto min-w-[300px] pt-5">
            <BackButton />
          </div>
        </section>
      );
    } else {
      return (
        <>
          <ShowtimesTheaterHeader />
          <MovieCard showtimes={showtimesST ? showtimesST : showtimes} />
        </>
      );
    }
  }
};
