import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createParkingReservation } from './action';
import { ReservationState, Reservation } from './types';

export const initialState: ReservationState = {
  reservation: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createParkingReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createParkingReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reservation.push(action.payload);
      })
      .addCase(createParkingReservation.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
      });

    //get reservation by user
  },
});

export const { reset } = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;
