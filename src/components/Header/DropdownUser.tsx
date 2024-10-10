import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import UserOne from '../../images/user/user-01.png';
import {
  ArrowDown01Icon,
  CallPaused02Icon,
  Logout04Icon,
  Settings02Icon,
  UserCheck01Icon,
} from 'hugeicons-react';
import { useLogOutMutation } from '../../redux/api/admin/adminAuthApi';
import { toast } from 'sonner';

const DropdownUser = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logout] = useLogOutMutation();
  const token = localStorage.getItem('token');

  const handleLogOut = async () => {
    console.log('handleLogOut');
    const res = await logout({ token }).unwrap();
    if (res.message == 'Logged out successfully') {
      toast.success('Logged out successfully');
      navigate('/login', { state: { from: location }, replace: true });
    }
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Suyel Haque
          </span>
          <span className="block text-xs">Developer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <ArrowDown01Icon size={24} className=" text-boxdark dark:text-white" />
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <UserCheck01Icon
                  size={24}
                  className=" text-boxdark dark:text-white"
                />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <CallPaused02Icon
                  size={24}
                  className=" text-boxdark dark:text-white"
                />
                My Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <Settings02Icon
                  size={24}
                  className=" text-boxdark dark:text-white"
                />{' '}
                Account Settings
              </Link>
            </li>
          </ul>
          <button
            onClick={() => handleLogOut()}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <Logout04Icon className=" text-boxdark dark:text-white" />
            Log Out
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
