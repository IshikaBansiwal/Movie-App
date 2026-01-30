import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setCurrentPage } from "../store/slices/moviesSlice";
import MovieGrid from "../components/MovieGrid";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const dispatch = useDispatch();

  const { searchResults, loading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(setCurrentPage(1));

    dispatch(
      fetchMovies({
        searchTerm: "movie", 
        page: 1,
        type: "",
        year: "",
      })
    );
  }, [dispatch]);

  return (
    <div className="container">

      <h2 className="page-title">Movies</h2>

      {loading && <LoadingSkeleton />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <MovieGrid movies={searchResults} />
      )}

    </div>
  );
}
