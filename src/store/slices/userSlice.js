import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/helpers";


const initialState = {
  watchlist: loadFromLocalStorage("watchlist") || [],
  favorites: loadFromLocalStorage("favorites") || [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const imdbID = action.payload;

      if (state.favorites.includes(imdbID)) {
        state.favorites = state.favorites.filter((id) => id !== imdbID);
      } else {
        state.favorites.push(imdbID);
      }

      saveToLocalStorage("favorites", state.favorites);
    },

    toggleWatchlist: (state, action) => {
      const imdbID = action.payload;

      if (state.watchlist.includes(imdbID)) {
        state.watchlist = state.watchlist.filter((id) => id !== imdbID);
      } else {
        state.watchlist.push(imdbID);
      }

      saveToLocalStorage("watchlist", state.watchlist);
    },
  },
});

export const { toggleFavorite, toggleWatchlist } = userSlice.actions;
export default userSlice.reducer;
