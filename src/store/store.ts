import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/authSlice";
import { movieApi } from "./rtkQuery/movieApi";
import { favouriteApi } from "./rtkQuery/favoritesApi";

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  [favouriteApi.reducerPath]: favouriteApi.reducer,
  userReducer
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([
        movieApi.middleware,
        favouriteApi.middleware
      ]),
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
