import { createBrowserRouter } from 'react-router-dom';

import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';

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
]);
