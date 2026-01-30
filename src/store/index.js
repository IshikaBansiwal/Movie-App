import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import filtersReducer from "./slices/filtersSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
    user: userReducer,
  },
});
