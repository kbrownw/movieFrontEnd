import { createContext, useState } from "react";

export const TheaterListContext = createContext();

export const TheaterListWrapper = ({ children }) => {
  const [theaters, setTheaters] = useState({});
  const [theatersFound, setTheatersFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <TheaterListContext.Provider
      value={{
        theaters,
        theatersFound,
        isLoading,
        errorMessage,
        setErrorMessage,
        setIsLoading,
        setTheatersFound,
        setTheaters,
      }}
    >
      {children}
    </TheaterListContext.Provider>
  );
};
