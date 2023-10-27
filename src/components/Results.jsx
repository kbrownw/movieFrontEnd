import { ParagraphTextWhite } from "./ParagraphTextWhite";
import { Subheading } from "./Subheading";
import { Theaters } from "./Theaters/Theaters";
import { Loading } from "./Loading";

const pText =
  "Meet up at your favorite local theater and get ready to embark on a cinematic journey like no other.";

export const Results = ({ theaterResults, theatersFound }) => {
  if (!theaterResults) {
    return <Loading />;
  } else {
    return (
      <>
        {!theatersFound ? (
          <Subheading text="No theaters found near you." />
        ) : (
          <div
            id="theater-results"
            className="grid grid-cols-1 justify-items-center max-w-6xl lg:px-0 px-4 mx-auto relative"
          >
            <Subheading text="Theaters Near You" />
            <ParagraphTextWhite text={pText} />
            <div
              id="theater-list"
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 relative`}
            >
              <Theaters theaters={theaterResults} />
            </div>
          </div>
        )}
      </>
    );
  }
};

export default Results;
