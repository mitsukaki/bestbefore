import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FridgeState {
  fridges: [];
}

const initialState = {
  fridges: [],
};

export const fridgeSlice = createSlice({
  name: 'fridge',
  initialState,
  reducers: {
    updateFridges: (_, action: PayloadAction<FridgeState>) => action.payload,
  },
});

export const { updateFridges } = fridgeSlice.actions;

export default fridgeSlice.reducer;
