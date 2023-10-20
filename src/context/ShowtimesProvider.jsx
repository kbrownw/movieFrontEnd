import { createContext } from "react";
import { useShowtimeAPI } from "../hooks/useShowtimeAPI";

export const ShowtimesContext = createContext();

export const ShowtimesWrapper = ({ children }) => {
  const { isLoading, showtimes, getShowtimes } = useShowtimeAPI();

  return (
    <ShowtimesContext.Provider value={{ isLoading, showtimes, getShowtimes }}>
      {children}
    </ShowtimesContext.Provider>
  );
};
