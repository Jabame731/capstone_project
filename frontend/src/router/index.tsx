import { createBrowserRouter } from 'react-router-dom';

import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import UserDashboard from '../pages/user/UserDashboard';
import ParkingLot from '../pages/parking/ParkingLot';
import ReservationForm from '../pages/reservation/ReservationForm';
import UserProfile from '../pages/UserProfile';
import ParkingSpace from '../pages/parking/ParkingSpace';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/user-dashboard',
    element: <UserDashboard />,
  },
  {
    path: '/user-profile',
    element: <UserProfile />,
  },
  {
    path: '/parking-lots',
    element: <ParkingLot />,
  },
  {
    path: '/parking-lots/:id',
    element: <ParkingSpace />,
  },
  {
    path: '/reserve-parking-slot/:id',
    element: <ReservationForm />,
  },
]);
