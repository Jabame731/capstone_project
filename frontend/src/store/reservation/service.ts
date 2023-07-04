import axios from 'axios';
import { APP_BASE_URL, RESERVE_PARKING_SLOT } from '../../utilities/api';
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

const reservationService = {
  reserveParkingSlot,
};

export default reservationService;
