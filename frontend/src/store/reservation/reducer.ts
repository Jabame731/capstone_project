import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createParkingReservation, getReservationByUser } from './action';
import { ReservationState, Reservation } from './types';

export const initialState: ReservationState = {
  reservations: [],
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
        state.reservations.push(action.payload);
      })
      .addCase(createParkingReservation.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
      })

      //get reservation by user
      .addCase(getReservationByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getReservationByUser.fulfilled,
        (state, action: PayloadAction<Reservation[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.reservations = action.payload;
        }
      )
      .addCase(getReservationByUser.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { reset } = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;
