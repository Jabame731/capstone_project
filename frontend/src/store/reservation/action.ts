import { createAsyncThunk } from '@reduxjs/toolkit';
import reservationService from './service';
import { AuthState, Reservation, ReservationInput } from './types';

export const createParkingReservation = createAsyncThunk<
  Reservation,
  ReservationInput
>('RESERVE_A_PARKING_SPOT', async (reservation, thunkAPI) => {
  try {
    const authState = thunkAPI.getState() as AuthState;

    const token = authState.auth.user.token;

    return await reservationService.reserveParkingSlot(reservation, token);
  } catch (err: any) {
    return thunkAPI.rejectWithValue({ err: err.data });
  }
});