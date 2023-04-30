import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favorites from "./reducers/favorites";

const rootReducer = combineReducers({
  favorites: favorites,
});

export type IStoreState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
