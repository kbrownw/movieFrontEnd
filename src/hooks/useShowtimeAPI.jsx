import { useState } from "react";

export const useShowtimeAPI = () => {
  const [showtimes, setShowtimes] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const getShowtimes = async (id) => {
    const url = "https://api.showtimes-by-keith.com/showtimes?id=" + id;
    let data;
    let response;
    sessionStorage.removeItem("showtimes");
    setLoading(true);
    try {
      response = await fetch(url);
    } catch (error) {
      console.log("Fetch error: ", error);
      setErrorOccurred(true);
    }
    try {
      data = await response.json();
      setShowtimes(data.data.theaterShowtimeGroupings);
      sessionStorage.setItem(
        "showtimes",
        JSON.stringify(data.data.theaterShowtimeGroupings)
      );
    } catch (error) {
      console.log("Data error", error);
      setErrorOccurred(true);
    } finally {
      setErrorOccurred(false);
      setLoading(false);
    }
  };

  return { isLoading, showtimes, errorOccurred, getShowtimes };
};
