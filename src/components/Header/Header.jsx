import { HeaderTextArea } from "../HeaderTextArea/HeaderTextArea";
import { Nav } from "../Nav/Nav";
import styles from "./header.module.css";

const headerParagraph =
  "Welcome to Showtime Central! Discover local theaters and find movie showtimes, all in one exciting place.";

export const Header = () => {
  return (
    <div className="bg-red relative py-20">
      <div
        className={`${styles.ellipse} absolute top-28 -left-20 rotate-[66deg]`}
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
