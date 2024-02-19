import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './auth/authSlice';

const rootReducer = combineReducers({
    userReducer
});

 const setupStore = () => configureStore({reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })});

      export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
