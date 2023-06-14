import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchMovie from "./fetchMovie";
import { useNavigate } from "react-router";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchMovie);

  const navigate = useNavigate();

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }

  const movie = results.data.short;
  const review = localStorage.getItem(id);
  let rReviewDB = localStorage.getItem("PastReviews");

  if (rReviewDB == null) {
    localStorage.setItem("PastReviews", "");
    rReviewDB = "";
  }

  if (review != null) {
    return (
      <div className="details">
        <div>
          <h1>{movie.name}</h1>
          <div className="detailed-view">
            <img src={movie.image} alt="Poster" className="image-poster"></img>
            <div>
              <p>{movie.description}</p>
              <h2>Your review:</h2>
              <p className="userReview">{review}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="details">
        <div>
          <h1>{movie.name}</h1>
          <div className="detailed-view">
            <img src={movie.image} alt="Poster" className="image-poster"></img>
            <div>
              <p>{movie.description}</p>
              <form
                onSubmit={(e) => {
                  const formData = new FormData(e.target);
                  e.preventDefault();
                  localStorage.setItem(
                    id,
                    formData.get("userReview").toString() ?? null
                  );
                  localStorage.setItem("PastReviews", rReviewDB + "," + id);
                  navigate(0);
                }}
              >
                <label>
                  Your review
                  <textarea
                    id="userReview"
                    name="userReview"
                    placeholder="Type your review"
                  ></textarea>
                </label>
                <button>Submit your review</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
