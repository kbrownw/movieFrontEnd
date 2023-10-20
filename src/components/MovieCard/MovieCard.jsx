import styles from "./moviecard.module.css";

export const MovieCard = ({ showtimes }) => {
  const formatTime = (time) => {
    let hours = time.getHours();

    console.log(hours);
  };

  const movie = Object.values(showtimes.movies).map(
    ({
      fandangoId,
      name,
      motionPictureRating,
      posterImage,
      durationMinutes,
      movieVariants,
    }) => {
      const movieTypes = Object.values(movieVariants).map(
        ({ formatId, formatName, amenityGroups }) => {
          const showtimeArray = [];
          amenityGroups.forEach((amenity) => {
            amenity.showtimes.forEach((time) => {
              showtimeArray.push(time.providerTime);
            });
          });
          showtimeArray.sort();

          const movieTimes = showtimeArray.map((time) => {
            return <li key={time}>{time}</li>;
          });
          return (
            <div key={formatId}>
              <h4>{formatName}</h4>
              <ul className="grid lg:grid-cols-8">{movieTimes}</ul>
            </div>
          );
        }
      );

      console.log(motionPictureRating);
      return (
        <section
          key={fandangoId}
          className={`grid ${styles["movie-card"]} gap-5 text-white bg-blue rounded-b-[1.5rem] rounded-tr-[1.5rem] overflow-hidden z-10`}
        >
          <div>
            <img src={posterImage.url} alt={name} />
          </div>
          <div className={`grid ${styles["movie-card-details"]} gap-y-5 py-10`}>
            <h2 className="text-6xl">{name}</h2>
            <div className="grid grid-cols-[1fr_4fr] gap-5">
              <h4>Movie Time Duration:</h4>
              <p>{durationMinutes} minutes</p>
            </div>
            <div className="grid grid-cols-[1fr_4fr] gap-5">
              <h4>Motion Picture Rating:</h4>
              {motionPictureRating ? (
                <p>{motionPictureRating.code}</p>
              ) : (
                <p>N/A</p>
              )}
            </div>
            {movieTypes}
          </div>
        </section>
      );
    }
  );
  return <>{movie}</>;
};
