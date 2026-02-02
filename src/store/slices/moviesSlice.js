import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovies, getMovieDetails } from "../../services/api";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page, type, year }) => {
    const data = await searchMovies(searchTerm, page, type, year);
    return data;
  }
);
export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (imdbID) => {
    const data = await getMovieDetails(imdbID);
    return data;
  }
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
      state.searchResults = [];
      state.totalResults = 0;
      state.currentPage = 1;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder


      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;

     
        if (state.currentPage === 1) {
          state.searchResults = action.payload.Search || [];
        } else {
          state.searchResults.push(...(action.payload.Search || []));
        }

        state.totalResults = Number(action.payload.totalResults || 0);
      })

      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })

      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;

     
        state.movieDetails[action.payload.imdbID] = action.payload;
      })

      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSearch, setCurrentPage } = moviesSlice.actions;

export default moviesSlice.reducer;
