import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../services/localStorage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    watchlist: loadFromStorage("watchlist", []),
    favorites: loadFromStorage("favorites", []),
  },
  reducers: {
    addToWatchlist: (state, action) => {
      // TODO: Add movie ID to watchlist
      // Save to localStorage
    },
    removeFromWatchlist: (state, action) => {
      // TODO: Remove movie ID from watchlist
      // Save to localStorage
    },
    toggleFavorite: (state, action) => {
      // TODO: Toggle favorite status
      // Save to localStorage
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, toggleFavorite } =
  userSlice.actions;
export default userSlice.reducer;
