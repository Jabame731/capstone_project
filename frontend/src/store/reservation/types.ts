export interface Reservation {
  id: number;
  start_time: string;
  start_date: string;
  end_time: string;
  end_date: string;
  user_id: string;
}

export interface ReservationInput {
  space_id: string;
  start_time: string;
  start_date: string;
  end_time: string;
  end_date: string;
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
