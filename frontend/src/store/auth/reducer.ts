import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser, editUser } from './action';
import { UserState } from './types';

const user = JSON.parse(localStorage.getItem('user') as string);

console.log(user);

export const initialState: UserState = {
  user: user ? user : '',
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const userSlice = createSlice({
  name: 'authorization',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    //registerUser
    builder
      .addCase(registerUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
        state.user = null;
      });

    //login user
    builder
      .addCase(loginUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, _) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      });

    //logout user
    builder.addCase(logoutUser.fulfilled, (state, _) => {
      state.user = null;
    });

    builder
      .addCase(editUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(editUser.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
        state.user = undefined;
      });
  },
});

export const { reset } = userSlice.actions;
export const authReducer = userSlice.reducer;
