import { LargeImage } from "./LargeImage";
import { ParagraphTextWhite } from "./ParagraphTextWhite";
import { TitleLargeWhite } from "./TitleLargeWhite";
import Search from "./Search";
import Results from "./Results";
import star from "../assets/star-line.svg";
import { useEffect, useContext } from "react";
import { TheaterListContext } from "../context/TheaterListContext";
import { Loading } from "./Loading";
import { Subheading } from "./Subheading";

const pText =
  "Want to find movie showtimes near you? Just enter your ZIP code and we'll do the rest. Ready, set, action!";

export const LandingPage = () => {
  const { isLoading, theaters, theatersFound, errorMessage } =
    useContext(TheaterListContext);

  useEffect(() => {
    if (theaters.length > 0) {
      const theaterList = document.getElementById("theater-results");
      theaterList.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [theaters]);
  return (
    <>
      <LargeImage />
      <div className="grid grid-cols-1 gap-5 justify-items-center max-w-6xl lg:px-0 px-4 mb-40 mx-auto relative">
        <div
          className={`w-[570px] h-[290px] border-slate-400 ellipse absolute top-[300px] -left-[190px] -rotate-[134deg] opacity-50`}
        ></div>
        <img
          src={star}
          className="absolute h-[500px] top-[50px] -right-[200px] grayscale opacity-25"
          alt="Star"
        />
        <TitleLargeWhite
          title="ZIP SEARCH"
          classes="md:text-[10rem] lg:text-[15rem]"
        />
        <ParagraphTextWhite text={pText} />
        <Search />
        {isLoading ? <Loading /> : null}
      </div>
      <>
        {theaters.length > 0 && theatersFound ? (
          <Results theaterResults={theaters} theatersFound={theatersFound} />
        ) : (
          <Subheading text={errorMessage} />
        )}
      </>
    </>
  );
};
