import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const SearchTerm = location.search.replace("?q=", "");
  const MovieId = location.pathname.replace("/details/", "").replace("/", "");

  console.log(location.pathname);

  return (
    <div className="BreadCrumb-NavBar">
      <Link to="/">Home</Link>
      <span> ➡ </span>
      {SearchTerm != "" && <Link to={`/?q=${SearchTerm}`}>{SearchTerm}</Link>}
      {MovieId != "" && <span> ➡ {MovieId}</span>}
    </div>
  );
};

export default Breadcrumbs;
