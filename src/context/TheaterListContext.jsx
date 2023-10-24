import { createContext, useState } from "react";

export const TheaterListContext = createContext();

export const TheaterListWrapper = ({ children }) => {
  const [theaters, setTheaters] = useState({});
  const [theatersFound, setTheatersFound] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <TheaterListContext.Provider
      value={{
        theaters,
        theatersFound,
        isLoading,
        setIsLoading,
        setTheatersFound,
        setTheaters,
      }}
    >
      {children}
    </TheaterListContext.Provider>
  );
};
