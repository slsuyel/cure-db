import { createBrowserRouter } from 'react-router-dom';

import { adminPaths } from './adminPaths';
import App from '../App';
import Errorpage from '../components/global/Errorpage';
import { routeGenerator } from '../utils/routeGenerator';
import MainLayout from '../components/layouts/MainLayout';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import AdminPrivate from './AdminPrivate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <AdminPrivate>
        <App />
      </AdminPrivate>
    ),
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...routeGenerator(adminPaths),
    ],
  },
]);

export default router;
