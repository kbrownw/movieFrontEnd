import { TitleLargeWhite } from "./TitleLargeWhite";
import { ThreeCircles } from "react-loader-spinner";

export const Loading = () => {
  return (
    <>
      <TitleLargeWhite title="Loading" classes="text-center" />
      <div className="mx-auto">
        <ThreeCircles height="100" color="#FFFFFF" />
      </div>
    </>
  );
};
