import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/authSlice';
import { movieApi } from './rtkQuery/movieApi';
import { favouriteApi } from './rtkQuery/favoritesApi';
import { historyApi } from './rtkQuery/historyApi';
import { listenerMiddleware } from './middlewares/user-middleware';

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  [favouriteApi.reducerPath]: favouriteApi.reducer,
  [historyApi.reducerPath]: historyApi.reducer,
  userReducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        movieApi.middleware,
        favouriteApi.middleware,
        historyApi.middleware,
        listenerMiddleware.middleware,
      ]),
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
