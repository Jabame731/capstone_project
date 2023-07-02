import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducer } from './auth/reducer';
import { parkingReducer } from './parking-lot/reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    parking: parkingReducer,
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
