import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, setCurrentPage } from "../store/slices/moviesSlice";
import { useDebounce } from "../hooks/useDebounce";


export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  
  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
  if (!debouncedValue || debouncedValue.length < 3) 
    return ;

  dispatch(setCurrentPage(1));

  dispatch(
    fetchMovies({
      searchTerm: debouncedValue,
      page: 1,
      type: "",
      year: "",
    })
  );
}, [debouncedValue, dispatch]);


  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
