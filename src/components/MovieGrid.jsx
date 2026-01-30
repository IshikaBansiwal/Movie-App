import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
