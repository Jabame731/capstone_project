import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducer } from './auth/reducer';
import { parkingReducer } from './parking-lot/reducer';
import { reservationReducer } from './reservation/reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    parking: parkingReducer,
    reservation: reservationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
