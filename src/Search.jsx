import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Results from "./results";
import fetchSearch from "./fetchSearch";

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    nameFilm: "",
  });

  const [SearchedTitle, setSearch] = useState("");

  const getURL = useLocation().search;
  const searchfromURL = new URLSearchParams(getURL).get("q") ?? "";

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
          setSearch(formData.get("nameFilm").toString() ?? "");
        }}
      >
        <input
          id="nameFilm"
          name="nameFilm"
          placeholder="Search for movies"
          defaultValue={searchfromURL}
        />

        <button>🔍</button>
      </form>
      <Results fetchStatus={results} movies={movies} search={SearchedTitle} />
    </div>
  );
};

export default SearchParams;
