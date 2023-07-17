import { createBrowserRouter } from 'react-router-dom';

import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import UserDashboard from '../pages/user/UserDashboard';
import ParkingLot from '../pages/parking/ParkingLot';
import ReservationForm from '../pages/reservation/ReservationForm';
import UserProfile from '../pages/UserProfile';
import ParkingSpace from '../pages/parking/ParkingSpace';
import EditUser from '../pages/EditUser';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <UserDashboard />,
  },
  {
    path: '/user-profile',
    element: <UserProfile />,
  },
  {
    path: '/edit-profile/:userId',
    element: <EditUser />,
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
    path: '/reserve-parking-slot/:parkingSpaceId',
    element: <ReservationForm />,
  },
]);
