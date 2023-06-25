export interface User {
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  telephone_number: string;
  image: string;
  user_role: string;
  uniqueId: string;
  token: string;
}

export interface UserState {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  user?: User | null;
}

export interface RegisterUserInput {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  telephone_number: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}
