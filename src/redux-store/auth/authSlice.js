import { createSlice } from '@reduxjs/toolkit';

import { logIn, logOut, refreshUser, register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    //register
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
    //login
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
    //logout
    builder.addCase(logOut.fulfilled, state => {
      return (state = initialState);
    });
    //refresh
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
  },
});
