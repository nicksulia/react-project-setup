// Root reducer for Redux store
import { combineReducers } from '@reduxjs/toolkit';
import featureReducer from './slices';
import { exampleApi } from '../api/example-api';

const rootReducer = combineReducers({
  feature: featureReducer,
  [exampleApi.reducerPath]: exampleApi.reducer,
});

export default rootReducer;
