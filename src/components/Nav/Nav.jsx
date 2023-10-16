import { Link } from "react-router-dom";

const navList = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Theaters",
    url: "/#theaters",
  },
  {
    text: "Contact",
    url: "/#contact",
  },
];

export const Nav = () => {
  const navItems = Object.values(navList).map(({ text, url }) => {
    return (
      <Link to={url} key={text}>
        <li>{text}</li>
      </Link>
    );
  });
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
