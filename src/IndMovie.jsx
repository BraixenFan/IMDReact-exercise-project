import { Link } from "react-router-dom";

const IndMovie = (props) => {
  const { name, description, fetchLink, image, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (image.length) {
    hero = image[0];
  }

  return (
    <Link to={`/details/${id}`} className="movie">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${description} — ${fetchLink}`}</h2>
      </div>
    </Link>
  );
};

export default IndMovie;
