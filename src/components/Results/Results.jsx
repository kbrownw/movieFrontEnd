export const Results = ({ theaterResults }) => {
  return (
    <>
      <h2>Results</h2>
      <div>{JSON.stringify(theaterResults)}</div>
    </>
  );
};

export default Results;
