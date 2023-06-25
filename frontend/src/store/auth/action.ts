import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUserInput, RegisterUserInput, User } from './types';
import authService from './service';

export const loginUser = createAsyncThunk<User, LoginUserInput>(
  'LOGIN_USER',
  async (user, thunkAPI) => {
    try {
      return await authService.loginUser(user);
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ err: err.data });
    }
  }
);

export const registerUser = createAsyncThunk<User, RegisterUserInput>(
  'REGISTER_USER',
  async (user, thunkAPI) => {
    try {
      return await authService.registerUser(user);
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ err: err.data });
    }
  }
);

export const logoutUser = createAsyncThunk('LOGOUT_USER', () => {
  authService.logoutUser();
});