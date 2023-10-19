import { useState } from "react";

export const useShowtimeAPI = () => {
  const [showtimes, setShowtimes] = useState({});
  const [isLoading, setLoading] = useState(false);

  let data;

  const getShowtimes = async (id) => {
    const url = "http://localhost:8080/showtimes?id=" + id;
    let response;

    setLoading(true);
    try {
      response = await fetch(url);
    } catch (error) {
      console.log(error);
    }
    try {
      data = await response.json();
    } catch (error) {
      console.log("Data error", error);
    }
    try {
      setShowtimes(data);
      console.log(data);
    } catch (error) {
      console.log("Set showtimes error", error);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, showtimes, getShowtimes };
};
