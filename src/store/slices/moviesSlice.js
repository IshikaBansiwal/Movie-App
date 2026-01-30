import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovies, getMovieDetails } from "../../services/api";

// TODO: Create async thunk for fetching movies
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page, type, year }) => {
    // TODO: Call searchMovies API
    // Return data
  },
);

// TODO: Create async thunk for fetching movie details
export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (imdbID) => {
    // TODO: Call getMovieDetails API
    // Return data
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    searchResults: [],
    movieDetails: {},
    loading: false,
    error: null,
    totalResults: 0,
    currentPage: 1,
  },
  reducers: {
    clearSearch: (state) => {
      // TODO: Clear search results
    },
    setCurrentPage: (state, action) => {
      // TODO: Update current page
    },
  },
  extraReducers: (builder) => {
    // TODO: Handle fetchMovies pending/fulfilled/rejected
    // TODO: Handle fetchMovieDetails pending/fulfilled/rejected
  },
});

export const { clearSearch, setCurrentPage } = moviesSlice.actions;
export default moviesSlice.reducer;
