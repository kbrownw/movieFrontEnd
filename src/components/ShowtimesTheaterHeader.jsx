import { Subheading } from "./Subheading";
import { BackButton } from "./BackButton";

export const ShowtimesTheaterHeader = () => {
  const theaterName = sessionStorage.getItem("theaterName");

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] lg:pt-0 pt-10 items-center border-b-blue border-b-2 z-10">
      <BackButton />
      <Subheading text={theaterName} />
    </section>
  );
};
