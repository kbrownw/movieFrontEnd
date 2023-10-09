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
    <form>
      <label htmlFor="zip-search">Enter Zip Code:</label>
      <input
        type="number"
        name="zip-search"
        id="zip-search"
        onChange={(e) => {
          setZipCode(e.target.value);
        }}
        value={zipCode}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
