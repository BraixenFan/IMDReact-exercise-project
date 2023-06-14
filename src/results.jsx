import IndMovie from "./IndMovie";
import { useSearchParams } from "react-router-dom";

const Results = ({ movies, fetchStatus, search }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  if (search != "" && searchParams.get("q") != search) {
    setSearchParams({ q: search });
  }

  if (fetchStatus.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="search">
      {!movies.length && search != "" ? (
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
              PreviSearch={search}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
