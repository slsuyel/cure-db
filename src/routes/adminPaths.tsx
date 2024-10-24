// import AdminProfile from '../pages/AdminProfile/AdminProfile';
import Home from '../pages/Home/Home';
// import AllPackages from '../pages/Packages/AllPackages';
// import SinglePackage from '../pages/Packages/SinglePackage';
import AllUsers from '../pages/Users/AllUsers';
// import CreateUser from '../pages/Users/CreateUser';
// import UserDetails from '../pages/Users/UserDetails';
// import Reports from '../pages/Reports/Reports';
import Settings from '../pages/Settings/Settings';
import UserUpdate from '../pages/Users/UserUpdate';
import PaymentLogs from '../pages/PaymentLogs/PaymentLogs';
import AllBlogs from '../pages/PaymentLogs/AllBlogs';

export const adminPaths = [
  {
    name: 'Home',
    path: 'home',
    element: <Home />,
  },

  // {
  //   name: 'Reports',
  //   path: 'reports',
  //   element: <Reports />,
  // },

  {
    name: 'User',
    path: 'users',
    children: [
      {
        name: 'All Users',
        path: 'all-users',
        element: <AllUsers />,
      },
      // {
      //   name: 'Create User',
      //   path: 'create-user',
      //   element: <CreateUser />,
      // },
      // {
      //   name: 'User Details',
      //   path: 'user/:id',
      //   element: <UserDetails />,
      //   sidebar: false,
      // },
      {
        name: 'user-update',
        path: 'user-update/:id',
        element: <UserUpdate />,
        sidebar: false,
      },
    ],
  },

  // {
  //   name: 'BLogs',
  //   path: 'blogs',
  //   element: <PaymentLogs />,
  // },

  {
    name: 'BLogs',
    path: 'blogs',
    children: [
      {
        name: 'All Blogs',
        path: 'all-blogs',
        element: <AllBlogs />,
      },
      {
        name: 'Add Blog',
        path: 'add-blog',
        element: <PaymentLogs />,
      },
    
    ],
  },

  // {
  //   name: 'Admin Profile',
  //   path: 'profile',
  //   element: <AdminProfile />,
  //   sidebar: false,
  // },
  {
    name: 'Settings',
    path: 'settings',
    element: <Settings />,
  },
];
