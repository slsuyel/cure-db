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
import EditBlog from '../pages/PaymentLogs/EditBlog';
import UpdateUser from '../pages/Users/UpdateUser';
import UserDetails from '../pages/Users/UserDetails';
import AllTransactions from '../pages/Transactions/AllTransactions';

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
    name: 'Patients',
    path: 'users',
    children: [
      {
        name: 'All Patients',
        path: 'all-patients',
        element: <AllUsers />,
      },
      {
        name: 'Patient Details',
        path: 'patient-details/:id',
        element: <UserDetails />,
        sidebar: false,
      },
      {
        name: 'Update Patient',
        path: 'update-patient/:id',
        element: <UserUpdate />,
        sidebar: false,
      },
      {
        name: 'Update User',
        path: 'update-user/:id',
        element: <UpdateUser />,
        sidebar: false,
      },
    ],
  },

  {
    name: 'Transactions',
    path: 'transactions',
    element: <AllTransactions />,
  },

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
      {
        name: 'Edit Blog',
        path: 'edit-blog/:id',
        element: <EditBlog />,
        sidebar: false,
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
