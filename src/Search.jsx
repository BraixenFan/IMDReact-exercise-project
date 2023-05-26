import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./results";
import fetchSearch from "./fetchSearch";

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    nameFilm: "",
  });

  const results = useQuery(["search", requestParams], fetchSearch);
  const movies = results?.data?.results ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            nameFilm: formData.get("nameFilm").toString() ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="nameFilm">
          Movie
          <input
            id="nameFilm"
            name="nameFilm"
            placeholder="What movie do you want to look at?"
          />
        </label>

        <button>Submit</button>
      </form>
      <Results movies={movies} />
    </div>
  );
};

export default SearchParams;
