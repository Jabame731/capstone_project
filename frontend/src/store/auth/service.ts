import axios from 'axios';
import { APP_BASE_URL, LOGIN_API, REGISTER_API } from '../../utilities/api';
import { LoginUserInput, RegisterUserInput } from './types';

const registerUser = async (userData: RegisterUserInput) => {
  const response = await axios.post(APP_BASE_URL + REGISTER_API, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const loginUser = async (userData: LoginUserInput) => {
  const response = await axios.post(APP_BASE_URL + LOGIN_API, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logoutUser = () => {
  localStorage.removeItem('user');
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
};

export default authService;
