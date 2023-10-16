import { useState } from "react";
import { Button } from "../Button";

export const Search = ({ setTheaters, setTheatersFound, theaters }) => {
  const [zipCode, setZipCode] = useState("");
  let theaterURL = "https://api.showtimes-by-keith.com/?zipCode=";
  const handleSubmit = async (e) => {
    e.preventDefault();
    theaterURL = theaterURL + zipCode;
    let response;
    let data;
    try {
      response = await fetch(theaterURL);
    } catch (error) {
      console.log(error);
    }
    try {
      data = await response.json();
      setTheaters(data.data.theaters);
      setTheatersFound(true);
    } catch (error) {
      console.log(error);
      setTheaters([]);
      setTheatersFound(false);
    }
  };

  const handleClearResults = () => {
    setTheaters([]);
    setZipCode("");
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
