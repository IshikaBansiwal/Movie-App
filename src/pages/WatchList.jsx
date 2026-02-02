import { useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";

export default function Watchlist() {

  const watchlist = useSelector((state) => state.user.watchlist);
  const movieDetails = useSelector((state) => state.movies.movieDetails);
  const searchResults = useSelector((state) => state.movies.searchResults);

  // Build movie objects from ids
  const watchlistMovies = watchlist
    .map((id) => {
      return (
        movieDetails[id] ||
        searchResults.find((movie) => movie.imdbID === id)
      );
    })
    .filter(Boolean);

  return (
    <div className="container">

      <h2>My Watchlist</h2>

      {watchlistMovies.length === 0 ? (
        <p>No movies in watchlist 📌</p>
      ) : (
        <MovieGrid movies={watchlistMovies} />
      )}

    </div>
  );
}
