import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/interfaces";

interface FavoriteState {
  movies: IMovie[];
}

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    movies: [],
  } as FavoriteState,
  reducers: {
    addMovie: (state, action: PayloadAction<IMovie>) => {
      state.movies = state.movies.concat(action.payload);
    },
    removeMovie: (state, action: PayloadAction<IMovie>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addMovie, removeMovie } = favoriteSlice.actions;

export default favoriteSlice.reducer;
