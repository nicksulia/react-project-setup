import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { exampleApi } from '../api/example-api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exampleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
