import axios from 'axios';
import {
  APP_BASE_URL,
  GET_PARKINGLOT_LISTS,
  GET_PARKING_LOT_BY_ID,
  GET_PARKING_SPACES,
} from '../../utilities/api';

const getParkingLotLists = async () => {
  const response = await axios.get(APP_BASE_URL + GET_PARKINGLOT_LISTS);

  return response.data;
};

const getParkingLotById = async (parkingLotId: string) => {
  const response = await axios.get(
    APP_BASE_URL + GET_PARKING_LOT_BY_ID(parkingLotId)
  );

  return response.data;
};

const getParkingSpaces = async () => {
  const response = await axios.get(APP_BASE_URL + GET_PARKING_SPACES);

  return response.data;
};

const parkingSpaceService = {
  getParkingLotLists,
  getParkingLotById,
  getParkingSpaces,
};

export default parkingSpaceService;
