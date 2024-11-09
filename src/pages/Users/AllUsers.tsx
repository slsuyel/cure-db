import { useState } from 'react';
import {
  BookmarkRemove01Icon,
  Delete02Icon,
  EditUser02Icon,
  InformationCircleIcon,
  PencilEdit02Icon,
  ViewIcon,
} from 'hugeicons-react';
import { Link } from 'react-router-dom';
import { useActiveUsersQuery } from '../../redux/api/user/userApi';
import Loader from '../../components/Loader';

const AllUsers = () => {
  // const token = localStorage.getItem('token');
  const { data, isLoading } = useActiveUsersQuery(undefined);

  const [selectedReligion, setSelectedReligion] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  if (isLoading) {
    return <Loader />;
  }

  console.log(data.data);

  /* {
    "id": 1,
    "email": "name",
    "gander": "Male",

    "fullName": "n",

} */

  return (
    <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h2 className="text-lg font-semibold mb-4">Patients List</h2>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Gender
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Mobile
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Edit Descriptions
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody className=" capitalize">
            {data.data.map((user: any) => (
              <tr key={user.id}>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  <Link
                    className="hover:underline transition mb-1"
                    to={`/dashboard/patient-details/${user.id}`}
                  >
                    {' '}
                    {user.fullName}
                  </Link>
                </td>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  {user.gander}
                </td>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  {user.email}
                </td>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark"></td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Link
                      to={`/dashboard/update-patient/${user.id}`}
                      className="hover:text-primary dark:text-blue-400 text-blue-500"
                    >
                      <PencilEdit02Icon size={24} />
                    </Link>
                  </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Link
                      to={`/dashboard/update-user/${user.id}`}
                      className="hover:text-primary dark:text-blue-400 text-blue-500"
                    >
                      <EditUser02Icon size={24} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
