import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, toggleWatchlist } from "../store/slices/userSlice";
import { Link } from "react-router-dom";


export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);

  const isFavorite = favorites.includes(movie.imdbID);
  const watchlist = useSelector((state) => state.user.watchlist);

  const isInWatchlist = watchlist.includes(movie.imdbID);

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`} className="movie-link">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-poster"
        />
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </Link>

      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: isFavorite ? "red" : "white",
          fontSize: "18px",
          marginTop: "5px",
        }}
        onClick={() => dispatch(toggleFavorite(movie.imdbID))}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
      <button
        onClick={() => dispatch(toggleWatchlist(movie.imdbID))}
        style={{
          marginTop: "8px",
          width: "100%",
          padding: "6px",
          background: isInWatchlist ? "#444" : "#e50914",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
}
