import IndMovie from "./IndMovie";

const Results = ({ movies }) => {
  return (
    <div className="search">
      {!movies.length ? (
        <h1 className="failed-fetch">No results were found</h1>
      ) : (
        movies.map((movie) => {
          return (
            <IndMovie name={movie.title} key={movie.id} fetchLink={movie.id} />
          );
        })
      )}
    </div>
  );
};

export default Results;
