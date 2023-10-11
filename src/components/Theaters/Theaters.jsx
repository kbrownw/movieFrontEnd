import styles from "./theaters.module.css";

export const Theaters = ({ theaters }) => {
  const theaterCard = Object.values(theaters).map(
    ({ id, name, hasReservedSeating, distance }) => {
      let roundedDistance = distance.toFixed(2);
      let corners = [];
      let largeCornerCount = 0;
      for (let i = 0; i <= 3; i++) {
        let randomNumber = Math.random();
        if (randomNumber > 0.5 && largeCornerCount < 3) {
          corners.push("lg");
          largeCornerCount++;
        } else {
          corners.push("sm");
        }
      }
      const tlCorner = "border-tl-" + corners[0];
      const trCorner = "border-tr-" + corners[1];
      const blCorner = "border-bl-" + corners[2];
      const brCorner = "border-br-" + corners[3];

      return (
        <a
          href="#top"
          key={id}
          className={`bg-blue text-center justify-items-center grid min-w-[350px] w-[30vw] min-h-[350px] mb-10 py-20 transition hover:shadow-2xl ${styles[tlCorner]} ${styles[trCorner]} ${styles[blCorner]} ${styles[brCorner]}`}
        >
          <h3 className="text-white text-4xl max-w-[250px]">{name}</h3>
          {hasReservedSeating ? (
            <p className="text-white font-normal text-xl">
              Reserved Seating Available
            </p>
          ) : (
            <p className="text-white font-normal text-xl">
              No Reserved Seating
            </p>
          )}
          <p className="text-white font-normal text-xl">
            Located {roundedDistance} miles away
          </p>
        </a>
      );
    }
  );

  return <>{theaterCard}</>;
};
