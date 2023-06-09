import { Link } from "react-router-dom";

const IndMovie = (props) => {
  const { name, description, fetchLink, PreviSearch, image } = props;
  const DescEscap = unescape(description);

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (image !== null) {
    hero = image;
  }

  return (
    <Link to={`/details/${fetchLink}?q=${PreviSearch}`} className="movie">
      <div className="image-container">
        <img src={hero} alt="" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${DescEscap}`}</h2>
      </div>
    </Link>
  );
};

export default IndMovie;
