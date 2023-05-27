import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchMovie from "./fetchMovie";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchMovie);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }

  const movie = results.data.short;

  return (
    <div className="details">
      <div>
        <h1>{movie.name}</h1>
        <div className="detailed-view">
          <img src={movie.image} alt="Poster" className="image-poster"></img>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
