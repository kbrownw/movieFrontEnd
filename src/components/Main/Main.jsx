import Search from "../Search/Search";
import Results from "../Results/Results";
import { useState } from "react";

export const Main = () => {
  const [theaters, setTheaters] = useState({});

  return (
    <>
      <Search setTheaters={setTheaters} />
      <Results theaterResults={theaters} />
    </>
  );
};
