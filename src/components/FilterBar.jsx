import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setType,
  setYear,
  setSort,
  setSearchTerm,
  clearFilters,
} from "../store/slices/filtersSlice";
import { setCurrentPage } from "../store/slices/moviesSlice";
import { fetchMovies } from "../store/slices/moviesSlice";

export default function FilterBar() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { searchTerm, type, year, sort } = useSelector((state) => state.filters);

  const years = [];
  for (let y = 2024; y >= 1990; y--) years.push(String(y));

  useEffect(() => {
    const q = searchParams.get("q") || "";
    const t = searchParams.get("type") || "all";
    const yParam = searchParams.get("year") || "all";
    const s = searchParams.get("sort") || "relevance";

    dispatch(setSearchTerm(q));
    dispatch(setType(t));
    dispatch(setYear(yParam));
    dispatch(setSort(s));
  }, []); 

  const applyFilters = (opts = {}) => {
    const t = opts.type ?? type;
    const yParam = opts.year ?? year;
    const s = opts.sort ?? sort;
    const q = (opts.searchTerm ?? searchTerm) || "movie";


    const params = {};
    if (q) params.q = q;
    if (t && t !== "all") params.type = t;
    if (yParam && yParam !== "all") params.year = yParam;
    if (s && s !== "relevance") params.sort = s;

    setSearchParams(params);

    dispatch(setCurrentPage(1));

    dispatch(
      fetchMovies({
        searchTerm: q,
        page: 1,
        type: t === "all" ? "" : t,
        year: yParam === "all" ? "" : yParam,
      })
    );
  };

  const handleTypeChange = (e) => {
    const val = e.target.value;
    dispatch(setType(val));
    applyFilters({ type: val });
  };

  const handleYearChange = (e) => {
    const val = e.target.value;
    dispatch(setYear(val));
    applyFilters({ year: val });
  };

  const handleSortChange = (e) => {
    const val = e.target.value;
    dispatch(setSort(val));
    applyFilters({ sort: val });
  };

  const handleClear = () => {
    dispatch(clearFilters());
    setSearchParams({});
    dispatch(setCurrentPage(1));
    dispatch(
      fetchMovies({
        searchTerm: "movie",
        page: 1,
        type: "",
        year: "",
      })
    );
  };

  return (
    <div className="filter-bar" style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 18 }}>
      <label>
        Type:
        <select value={type} onChange={handleTypeChange} style={{ marginLeft: 8 }}>
          <option value="all">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </label>

      <label>
        Year:
        <select value={year} onChange={handleYearChange} style={{ marginLeft: 8 }}>
          <option value="all">All</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </label>

      <label>
        Sort:
        <select value={sort} onChange={handleSortChange} style={{ marginLeft: 8 }}>
          <option value="relevance">Relevance</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="year-desc">Year (newest)</option>
          <option value="year-asc">Year (oldest)</option>
        </select>
      </label>

      <button onClick={handleClear} style={{ marginLeft: 'auto', padding: '6px 10px' }}>
        Clear filters
      </button>
    </div>
  );
}
