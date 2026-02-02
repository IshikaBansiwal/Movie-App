import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchMovies, setCurrentPage } from "../store/slices/moviesSlice";
import MovieGrid from "../components/MovieGrid";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Pagination";
import FilterBar from "../components/FilterBar";
import { selectFilteredMovies } from "../store/selectors";

export default function Home() {
  const dispatch = useDispatch();

const { loading, error, totalResults, currentPage } = useSelector((state) => state.movies);
  const searchResults = useSelector(selectFilteredMovies);

  const filters = useSelector((state) => state.filters);
  const searchTerm = filters.searchTerm;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Read URL params on mount and dispatch fetch if present
    const q = searchParams.get("q") || "";
    const t = searchParams.get("type") || "";
    const y = searchParams.get("year") || "";
    const p = Number(searchParams.get("page") || 1);

    dispatch(setCurrentPage(p));

    dispatch(
      fetchMovies({
        searchTerm: q || "movie",
        page: p,
        type: t,
        year: y,
      })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

const handleLoadMore = () => {
  const nextPage = currentPage + 1;

  dispatch(setCurrentPage(nextPage));

  dispatch(
    fetchMovies({
      searchTerm: searchTerm,
      page: nextPage,
      type: "",
      year: "",
    })
  );
};

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

      <FilterBar />

      {loading && <LoadingSkeleton />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <MovieGrid movies={searchResults} />
      )}

      {!loading && !error && searchResults.length > 0 && (
        <Pagination
          totalResults={totalResults}
          currentPage={currentPage}
          resultsPerPage={10}
          onPageChange={(page) => {
            const term = searchTerm || "movie";
            dispatch(setCurrentPage(page));
            // update page param
            const params = Object.fromEntries([...searchParams.entries()]);
            params.page = String(page);
            setSearchParams(params);

            dispatch(
              fetchMovies({
                searchTerm: term,
                page: page,
                type: filters.type === "all" ? "" : filters.type,
                year: filters.year === "all" ? "" : filters.year,
              })
            );
          }}
        />
      )}
    </div>
  );
}
