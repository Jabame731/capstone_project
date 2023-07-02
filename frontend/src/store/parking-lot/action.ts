import { createAsyncThunk } from '@reduxjs/toolkit';
import parkingSpaceService from './service';
import { ParkingLot } from './types';

export const getParkingLotLists = createAsyncThunk<ParkingLot[]>(
  'GET_PARKING_LOT_LISTS',
  async (_, thunkAPI) => {
    try {
      return await parkingSpaceService.getParkingLotLists();
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ err: err.data });
    }
  }
);
