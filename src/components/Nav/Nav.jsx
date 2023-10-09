const navList = [
  {
    text: "Home",
    url: "/#top",
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
      <a href={url} key={text}>
        <li>{text}</li>
      </a>
    );
  });
  return (
    <nav className="grid grid-cols-2 border-y border-y-black py-4 relative">
      <p>Showtimes by Keith</p>
      <ul className="flex flex-row justify-self-end gap-5">{navItems}</ul>
    </nav>
  );
};
