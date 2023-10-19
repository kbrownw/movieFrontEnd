import styles from "./theaters.module.css";
import { useShowtimeAPI } from "../../hooks/useShowtimeAPI";
import { useNavigate } from "react-router-dom";

export const borderRadiusRandom = () => {
  let cornersArray = [];
  let largeCornerCount = 0;

  for (let i = 0; i <= 3; i++) {
    let randomNumber = Math.random();
    if (randomNumber > 0.5 && largeCornerCount < 3) {
      cornersArray.push("lg");
      largeCornerCount++;
    } else {
      cornersArray.push("sm");
    }
  }
  return cornersArray;
};

export const Theaters = ({ theaters }) => {
  const { getShowtimes } = useShowtimeAPI();
  const navigate = useNavigate();

  const theaterCard = Object.values(theaters).map(
    ({ id, name, hasReservedSeating, distance }) => {
      const roundedDistance = distance.toFixed(2);
      const corners = borderRadiusRandom();

      const tlCorner = "border-tl-" + corners[0];
      const trCorner = "border-tr-" + corners[1];
      const blCorner = "border-bl-" + corners[2];
      const brCorner = "border-br-" + corners[3];

      return (
        <button
          onClick={(e) => {
            e.preventDefault();
            getShowtimes(id);
            navigate("/showtimes");
          }}
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
        </button>
      );
    }
  );

  return <>{theaterCard}</>;
};
