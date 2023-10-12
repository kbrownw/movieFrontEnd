import { HeaderTextArea } from "../HeaderTextArea/HeaderTextArea";
import { Nav } from "../Nav/Nav";

const headerParagraph =
  "Welcome to Showtimes by Keith! Discover local theaters and find movie showtimes, all in one exciting place.";

export const Header = () => {
  return (
    <div className="bg-red relative py-20">
      <div
        className={`ellipse w-[317px] h-[215px] border-color-white absolute top-28 -left-20 rotate-[66deg]`}
      ></div>
      <div
        className={`ellipse absolute w-[295px] h-[155px] border-color-white -bottom-[97px] -right-[120px] rotate-[144deg] z-10`}
      ></div>
      <div
        className={`ellipse absolute w-[295px] h-[155px] border-color-white -bottom-[97px] -right-[120px] -rotate-[3deg] z-10`}
      ></div>
      <div className="max-w-6xl lg:px-0 px-4 mx-auto relative">
        <Nav />
        <HeaderTextArea
          headerTitle="SHOWTIMES"
          headerParagraph={headerParagraph}
        />
      </div>
    </div>
  );
};

export default Header;
