export const APP_BASE_URL = 'http://localhost:8800/api';

//API's
export const LOGIN_API = '/auth/login';
export const REGISTER_API = '/auth/register';

export const GET_PARKINGLOT_LISTS = '/parkingLot/getParkingLotLists';
export const GET_PARKING_SPACES = '/parkingSpace/getParkingSpaces/';
export const GET_PARKING_LOT_BY_ID = (id: string) =>
  `/parkingLot/getParkingLotById/${id}`;
export const EDIT_USER = (id: string) => `/auth/updateUser/${id}`;
export const RESERVE_PARKING_SLOT = `/reservation/reserveParkingSpot`;
export const GET_RESERVATION_HISTORY_BY_USER = `/reservation/getReservationByUser`;
