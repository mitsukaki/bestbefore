import { Fridge, FridgeItem } from 'types/fridge.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FridgeState {
  fridges: Fridge[];
}

const initialState: FridgeState = {
  fridges: [],
};

export const fridgeSlice = createSlice({
  name: 'fridge',
  initialState,
  reducers: {
    updateFridges: (_, action: PayloadAction<FridgeState>) => action.payload,
    updateFridgeItems: (state, action: PayloadAction<FridgeItem[]>) => {
      state.fridges[0].items = action.payload;
    },
  },
});

export const { updateFridges, updateFridgeItems } = fridgeSlice.actions;

export default fridgeSlice.reducer;
