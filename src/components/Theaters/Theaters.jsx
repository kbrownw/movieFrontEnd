import styles from "./theaters.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShowtimesContext } from "../../context/ShowtimesProvider";
import { TheaterFavoriteButton } from "../TheaterFavoriteButton";

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

export const buildBorderRadiusArray = (theaters) => {
  let arr = [];
  for (let i = 0; i < theaters.length - 1; i++) {
    arr.push(borderRadiusRandom());
  }
  return arr;
};

export const Theaters = ({ theaters }) => {
  const { getShowtimes } = useContext(ShowtimesContext);
  const [cornersArray, setCornersArray] = useState([]);
  const navigate = useNavigate();
  let counter = 0;

  useEffect(() => {
    setCornersArray(buildBorderRadiusArray(theaters));
  }, [theaters]);

  const theaterCard = Object.values(theaters).map(
    ({ id, name, hasReservedSeating, distance, hasShowtimes }) => {
      if (hasShowtimes == "true") {
        const roundedDistance = distance.toFixed(2);
        const corners = cornersArray[counter];
        let tlCorner;
        let trCorner;
        let brCorner;
        let blCorner;

        if (corners) {
          tlCorner = "border-tl-" + corners[0];
          trCorner = "border-tr-" + corners[1];
          blCorner = "border-bl-" + corners[2];
          brCorner = "border-br-" + corners[3];
        }

        counter++;

        return (
          <div className="relative w-[min-content]" key={id}>
            <div className={`${styles.favorite}`}>
              <TheaterFavoriteButton id={id} name={name} />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                getShowtimes(id);
                sessionStorage.setItem("theaterName", name);
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
          </div>
        );
      }
    }
  );

  return <>{theaterCard}</>;
};
