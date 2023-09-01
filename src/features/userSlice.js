import {createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user: null,
  },
  reducers: {
    //action one login
    login: (state, action) => {
      state.user = action.payload
    },
    //action 2 logout 
    logout: (state) => {
      state.user = null;
    }
    //dispatch or to connect we use dispatch
  },
});

export const { login, logout } = userSlice.actions;

//to get he info
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
