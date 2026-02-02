import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchMovies, setCurrentPage } from "../store/slices/moviesSlice";
import { setSearchTerm } from "../store/slices/filtersSlice";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedValue || debouncedValue.length < 3) return;

    dispatch(setSearchTerm(debouncedValue));
    dispatch(setCurrentPage(1));

    const params = Object.fromEntries([...searchParams.entries()]);
    params.q = debouncedValue;
    params.page = "1";
    setSearchParams(params);

    dispatch(
      fetchMovies({
        searchTerm: debouncedValue,
        page: 1,
        type: filters.type === "all" ? "" : filters.type,
        year: filters.year === "all" ? "" : filters.year,
      })
    );
  }, [debouncedValue, dispatch]);

  
  useEffect(() => {
    if (filters.searchTerm && filters.searchTerm !== query) {
      setQuery(filters.searchTerm);
    }
  }, [filters.searchTerm]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
