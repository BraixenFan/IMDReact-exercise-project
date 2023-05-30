import IndMovie from "./IndMovie";

const Results = ({ movies, fetchStatus }) => {
  if (fetchStatus.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="search">
      {!movies.length ? (
        <h2 className="failed-fetch">No results were found</h2>
      ) : (
        movies.map((movie) => {
          return (
            <IndMovie
              name={movie.title}
              description={movie.description}
              key={movie.id}
              fetchLink={movie.id}
              image={movie.image}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
