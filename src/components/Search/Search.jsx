import { useEffect, useState, useContext } from "react";
import { Button } from "../Button";
import { TheaterListContext } from "../../context/TheaterListContext";

export const Search = () => {
  const { theaters, setTheaters, setTheatersFound, setIsLoading } =
    useContext(TheaterListContext);
  const [zipCode, setZipCode] = useState("");
  let theaterURL = "https://api.showtimes-by-keith.com/?zipCode=";

  useEffect(() => {
    if (theaters.length > 0) {
      sessionStorage.setItem("theaters", JSON.stringify(theaters));
    }
  }, [theaters]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    theaterURL = theaterURL + zipCode;

    try {
      const response = await fetch(theaterURL);
      const data = await response.json();
      setTheaters(data.data.theaters);
      setTheatersFound(true);
    } catch (error) {
      console.log(error);
      setTheaters([]);
      setTheatersFound(false);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearResults = () => {
    setTheaters([]);
    setZipCode("");
    sessionStorage.removeItem("theaters");
  };

  return (
    <>
      <form className="grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center">
        <label
          className="text-white text-xl lg:justify-self-end:pr-8 relative"
          htmlFor="zip-search"
        >
          Enter Zip Code
        </label>
        <input
          className="rounded-lg h-14 my-5 bg-dark-blue border-[#562C2C] border-2 text-white text-xl text-center justify-self-center relative"
          type="number"
          placeholder="47905"
          name="zip-search"
          id="zip-search"
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
          value={zipCode}
        />
        <button
          className="bg-[#562C2C] rounded-lg h-14 w-40 text-white text-xl hover:bg-blue transition relative"
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      {theaters.length > 0 ? (
        <Button
          text="Clear Results"
          clickFunction={handleClearResults}
          type="button"
        />
      ) : null}
    </>
  );
};

export default Search;
