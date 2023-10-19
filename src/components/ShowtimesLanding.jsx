import { TitleLargeWhite } from "./TitleLargeWhite";
import { useContext, useEffect } from "react";
import { ShowtimesContext } from "../context/ShowtimesProvider";

export const ShowtimesLanding = () => {
  const { isLoading, showtimes } = useContext(ShowtimesContext);

  useEffect(() => {
    console.log("Showtimes Landing Page loading: ", isLoading);
  }, [isLoading]);

  return (
    <section className="max-w-6xl lg:px-0 px-4 mx-auto relative">
      {isLoading ? (
        <TitleLargeWhite title="Loading..." />
      ) : (
        JSON.stringify({ showtimes })
      )}
    </section>
  );
};
