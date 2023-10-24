import styles from "./moviecard.module.css";

export const MovieCard = ({ showtimes }) => {
  const formatTime = (time) => {
    const formattedTime = time.slice(0, 5);
    return formattedTime;
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
              showtimeArray.push(formatTime(time.providerTime));
            });
          });
          showtimeArray.sort();

          const movieTimes = showtimeArray.map((time) => {
            return <li key={time}>{time}</li>;
          });
          return (
            <div key={formatId}>
              <h4 className="py-2 lg:text-left">{formatName}</h4>
              <ul className="grid lg:grid-cols-8 lg:max-w-[70%]">
                {movieTimes}
              </ul>
            </div>
          );
        }
      );
      return (
        <section
          key={fandangoId}
          className={`grid grid-cols-1 md:grid-cols-[1fr_3fr] text-center gap-5 text-white bg-blue rounded-b-[1.5rem] rounded-tr-[1.5rem] overflow-hidden z-10`}
        >
          <div className="max-w-[200px] md:max-w-full mx-auto">
            <img src={posterImage.url} alt={name} />
          </div>
          <div className={`grid ${styles["movie-card-details"]} gap-y-5 py-10`}>
            <h2 className="text-6xl md:justify-self-start">{name}</h2>
            <div className="grid md:grid-cols-[1fr_4fr] gap-5">
              <h4 className="md:justify-self-start">Movie Time Duration:</h4>
              <p className="md:justify-self-start">{durationMinutes} minutes</p>
            </div>
            <div className="grid md:grid-cols-[1fr_4fr] gap-5">
              <h4 className="md:justify-self-start">Motion Picture Rating:</h4>
              {motionPictureRating ? (
                <p className="md:justify-self-start">
                  {motionPictureRating.code}
                </p>
              ) : (
                <p className="md:justify-self-start">N/A</p>
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
