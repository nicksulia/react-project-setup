// Example feature slice
import { createSlice } from '@reduxjs/toolkit';

interface FeatureState {
  value: string;
}

const initialState: FeatureState = {
  value: '',
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = featureSlice.actions;
export default featureSlice.reducer;
