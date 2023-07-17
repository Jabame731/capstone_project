export interface Reservation {
  id: number;
  space_id: number;
  vehicle_name: string;
  start_time: string;
  start_date: string;
  end_time: string;
  end_date: string;
  payment: string;
  user_id: string;
}

export interface ReservationInput {
  vehicle_name: string;
  start_time: string;
  start_date: string;
  end_time: string;
  end_date: string;
}

export interface ReservationState {
  reservations: Reservation[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

export interface AuthState {
  auth: {
    user: {
      token: string;
    };
  };
}
