import { TitleLargeWhite } from "./TitleLargeWhite";
import { useShowtimeAPI } from "../hooks/useShowtimeAPI";

export const ShowtimesLanding = () => {
  const { isLoading, showtimes } = useShowtimeAPI();

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
