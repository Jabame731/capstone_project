import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getParkingLotLists } from './action';
import { ParkingLotState, ParkingLot } from './types';

export const initialState: ParkingLotState = {
  parkingLots: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const parkingLotSlice = createSlice({
  name: 'parkingLot',
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //get parking lots
      .addCase(getParkingLotLists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getParkingLotLists.fulfilled,
        (state, action: PayloadAction<ParkingLot[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.parkingLots = action.payload;
        }
      )
      .addCase(getParkingLotLists.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { reset } = parkingLotSlice.actions;
export const parkingReducer = parkingLotSlice.reducer;
