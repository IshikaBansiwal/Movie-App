import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
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
    </div>
  );
}
