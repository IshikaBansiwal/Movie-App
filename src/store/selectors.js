import { createSelector } from "@reduxjs/toolkit";

// TODO: Create selector for filtered movies
export const selectFilteredMovies = createSelector(
  [(state) => state.movies.searchResults, (state) => state.filters],
  (movies, filters) => {
    // TODO: Filter movies based on filters
    return movies;
  },
);

// TODO: Create selector for watchlist count
export const selectWatchlistCount = (state) => {
  // TODO: Return watchlist length
};

// TODO: Create selector for favorites count
export const selectFavoritesCount = (state) => {
  // TODO: Return favorites length
};
