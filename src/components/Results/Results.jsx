import { ParagraphTextWhite } from "../ParagraphTextWhite";
import { Subheading } from "../Subheading";

const pText =
  "Meet up at your favorite local theaters and get ready to embark on a cinematic journey like no other.";

export const Results = ({ theaterResults }) => {
  return (
    <>
      <Subheading text="Theaters Near You" />
      <ParagraphTextWhite text={pText} />
      <div>{JSON.stringify(theaterResults)}</div>
    </>
  );
};

export default Results;
