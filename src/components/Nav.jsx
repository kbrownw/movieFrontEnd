import { useContext } from "react";
import { Link } from "react-router-dom";
import { TheaterListContext } from "../context/TheaterListContext";
import { useLocation } from "react-router-dom";

export const Nav = () => {
  const { theatersFound } = useContext(TheaterListContext);
  const location = useLocation();

  return (
    <nav className="grid  gap-10 grid-cols-1 sm:grid-cols-2 border-y border-y-black py-4 relative">
      <p className="justify-self-center sm:justify-self-start">
        Showtimes by Keith
      </p>
      <ul className="grid grid-cols-1 justify-self-center sm:grid-cols-3 sm:justify-self-end gap-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link
          to="/#theaters"
          onClick={() => {
            if (location.pathname === "/") {
              if (theatersFound) {
                const theaterList = document.getElementById("theater-results");
                theaterList.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              } else {
                const zipSearch = document.getElementById("zip-search");
                zipSearch.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }
          }}
        >
          <li>Theaters</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};
