import { useEffect, useState } from "react";

export const useShowtimeAPI = () => {
  const [showtimes, setShowtimes] = useState({});
  const [isLoading, setLoading] = useState(false);

  let data;

  const getShowtimes = async (id) => {
    const url = "https://api.showtimes-by-keith.com/showtimes?id=" + id;
    let response;

    setLoading(true);
    try {
      response = await fetch(url);
    } catch (error) {
      console.log("Fetch error: ", error);
    }
    try {
      data = await response.json();
      console.log("API Data: ", data);
      setShowtimes(data);
    } catch (error) {
      console.log("Data error", error);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, showtimes, getShowtimes };
};
