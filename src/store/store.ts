import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/authSlice";
import { movieApi } from "./rtkQuery/movieApi";

const rootReducer = combineReducers({
  userReducer,
  [movieApi.reducerPath]: movieApi.reducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(movieApi.middleware),
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
