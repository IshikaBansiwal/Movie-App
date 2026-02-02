import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredMovies = createSelector(
  [(state) => state.movies.searchResults, (state) => state.filters],
  (movies, filters) => {
    const { type, year, sort } = filters;

    let items = movies.slice();

    if (type && type !== "all") {
      items = items.filter((m) => (m.Type || "").toLowerCase() === type);
    }

    if (year && year !== "all") {
      items = items.filter((m) => (m.Year || "") === String(year));
    }

 
    if (sort && sort !== "relevance") {
      if (sort === "title-asc") {
        items.sort((a, b) => a.Title.localeCompare(b.Title));
      } else if (sort === "title-desc") {
        items.sort((a, b) => b.Title.localeCompare(a.Title));
      } else if (sort === "year-asc") {
        items.sort((a, b) => (a.Year || "").localeCompare(b.Year || ""));
      } else if (sort === "year-desc") {
        items.sort((a, b) => (b.Year || "").localeCompare(a.Year || ""));
      }
    }

    return items;
  },
);


export const selectWatchlistCount = (state) => state.user.watchlist.length || 0;


export const selectFavoritesCount = (state) => state.user.favorites.length || 0;
