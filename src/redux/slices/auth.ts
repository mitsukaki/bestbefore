import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from 'types/auth.type';

const initialState: AuthState = {
  isLoggedIn: null,
  token: '',
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (_, action: PayloadAction<AuthState>) => action.payload,
  },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
