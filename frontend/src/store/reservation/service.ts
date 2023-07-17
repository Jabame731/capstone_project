import axios from 'axios';
import {
  APP_BASE_URL,
  GET_RESERVATION_HISTORY_BY_USER,
  RESERVE_PARKING_SLOT,
} from '../../utilities/api';
import { ReservationInput } from './types';

const reserveParkingSlot = async (
  reservationData: ReservationInput,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    APP_BASE_URL + RESERVE_PARKING_SLOT,
    reservationData,
    config
  );

  return response.data;
};

const getReservationByUser = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    APP_BASE_URL + GET_RESERVATION_HISTORY_BY_USER,
    config
  );

  return response.data;
};

const reservationService = {
  reserveParkingSlot,
  getReservationByUser,
};

export default reservationService;
