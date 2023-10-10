import { useState } from "react";

export const Search = ({ setTheaters }) => {
  const [zipCode, setZipCode] = useState("");
  let theaterURL = "http://localhost:3000/?zipCode=";

  const handleSubmit = async (e) => {
    e.preventDefault();
    theaterURL = theaterURL + zipCode;
    const response = await fetch(theaterURL);
    const data = await response.json();
    console.log(data);
    setTheaters(data);
  };

  return (
    <form className="grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center">
      <label
        className="text-white text-xl lg:justify-self-end:pr-8 relative"
        htmlFor="zip-search"
      >
        Enter Zip Code
      </label>
      <input
        className="rounded-lg h-14 my-5 bg-dark-blue border-[#562C2C] border-2 lg:mr-10 text-white text-xl text-center relative"
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
  );
};

export default Search;
