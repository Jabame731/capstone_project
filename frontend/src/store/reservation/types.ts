export interface Reservation {
  id: number;
  start_time: string;
  end_time: string;
  user_id: string;
}

export interface ReservationInput {
  start_time: string;
  end_time: string;
}

export interface ReservationState {
  reservation: Reservation[];
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
