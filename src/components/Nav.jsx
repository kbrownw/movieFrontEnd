import { useContext } from "react";
import { Link } from "react-router-dom";
import { TheaterListContext } from "../context/TheaterListContext";

export const Nav = () => {
  const { theatersFound } = useContext(TheaterListContext);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (theatersFound) {
  //     const theaterList = document.getElementById("theater-results");
  //     theaterList.scrollIntoView({ behavior: "smooth", block: "start" });
  //   } else {
  //     const zipSearch = document.getElementById("zip-search");
  //     zipSearch.scrollIntoView({ behavior: "smooth", block: "start" });
  //     console.log(zipSearch);
  //   }
  // };
  const navList = [
    {
      text: "Home",
      url: "/",
      id: "nav-home",
    },
    {
      text: "Theaters",
      url: "/#theaters",
      id: "nav-theaters",
    },
    {
      text: "Contact",
      url: "/contact",
      id: "nav-contact",
    },
  ];
  const navItems = Object.values(navList).map(({ text, url }) => {
    return (
      <Link to={url} key={text}>
        <li>{text}</li>
      </Link>
    );
  });

  console.log(document.getElementById("nav-theaters"));
  return (
    <nav className="grid  gap-10 grid-cols-1 sm:grid-cols-2 border-y border-y-black py-4 relative">
      <p className="justify-self-center sm:justify-self-start">
        Showtimes by Keith
      </p>
      <ul className="grid grid-cols-1 justify-self-center sm:grid-cols-3 sm:justify-self-end gap-5">
        {navItems}
      </ul>
    </nav>
  );
};
