import { useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";

export default function Favorites() {
  const { favorites } = useSelector((state) => state.user);
  const { searchResults } = useSelector((state) => state.movies);

  const favoriteMovies = searchResults.filter((movie) =>
    favorites.includes(movie.imdbID)
  );

  return (
    <div className="container">
      <h2>My Favorites</h2>
      {favoriteMovies.length === 0 ? (
        <p>You have no favorite movies yet.</p>
      ) : (
        <MovieGrid movies={favoriteMovies} />
      )}
    </div>
  );
}
