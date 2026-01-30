import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../store/slices/moviesSlice";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorMessage from "../components/ErrorMessage";

export default function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movieDetails, loading, error } = useSelector(
    (state) => state.movies
  );

  const movie = movieDetails[imdbID]; // check cache

  useEffect(() => {
    if (!movie) {
      dispatch(fetchMovieDetails(imdbID));
    }
  }, [dispatch, imdbID, movie]);

  return (
    <div className="container">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {loading && <LoadingSkeleton />}

      {error && <ErrorMessage message={error} />}

      {!loading && movie && (
        <div className="movie-details">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
            alt={movie.Title}
            className="movie-details-poster"
          />

          <div className="movie-details-info">
            <h1>{movie.Title} ({movie.Year})</h1>
            <p><strong>Rated:</strong> {movie.Rated}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
            {movie.BoxOffice && <p><strong>Box Office:</strong> {movie.BoxOffice}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
