import { useState } from 'react';
import {
  BookmarkRemove01Icon,
  Delete02Icon,
  PencilEdit02Icon,
  ViewIcon,
} from 'hugeicons-react';
import { Link } from 'react-router-dom';
import { useActiveUsersQuery } from '../../redux/api/user/userApi';
import Loader from '../../components/Loader';
import { TUsers } from '../../types/type';

const userData = [
  {
    name: 'John Doe',
    religion: 'Christianity',
    maritalStatus: 'Married',
    profession: 'Software Engineer',
    phoneNumber: '123-456-7890',
    package: 'Standard Package',
    id: 12,
  },
  {
    name: 'Jane Smith',
    religion: 'Islam',
    maritalStatus: 'Single',
    profession: 'Graphic Designer',
    phoneNumber: '987-654-3210',
    package: 'Free Package',
    id: 12,
  },
  {
    name: 'Alice Johnson',
    religion: 'Hinduism',
    maritalStatus: 'Divorced',
    profession: 'Product Manager',
    phoneNumber: '555-123-4567',
    package: 'Business Package',
    id: 12,
  },
  // Add more users as needed
];

const AllUsers = () => {
  const token = localStorage.getItem('token');
  const { data, isLoading } = useActiveUsersQuery({ token });

  const [selectedReligion, setSelectedReligion] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const filteredUsers = userData.filter((user) => {
    return (
      (selectedReligion === '' || user.religion === selectedReligion) &&
      (selectedPackage === '' || user.package === selectedPackage)
    );
  });

  if (isLoading) {
    return <Loader />;
  }
  const response: TUsers = data;

  return (
    <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h2 className="text-lg font-semibold mb-4">User List</h2>

      <div className="mb-4">
        {/* Filter by Religion */}
        <select
          value={selectedReligion}
          onChange={(e) => setSelectedReligion(e.target.value)}
          className="mr-4 p-2 border rounded bg-white dark:bg-boxdark border-stroke dark:border-strokedark"
        >
          <option value="">All Religions</option>
          <option value="Christianity">Christianity</option>
          <option value="Islam">Islam</option>
          <option value="Hinduism">Hinduism</option>
          {/* Add more religions as needed */}
        </select>

        {/* Filter by Package */}
        <select
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
          className="p-2 border rounded  bg-white dark:bg-boxdark border-stroke dark:border-strokedark"
        >
          <option value="">All Packages</option>
          <option value="Free Package">Free Package</option>
          <option value="Standard Package">Standard Package</option>
          <option value="Business Package">Business Package</option>
          {/* Add more packages as needed */}
        </select>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Religion
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Marital Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Profession
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Phone Number
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Package
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" capitalize">
            {response.data.map((user, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  <Link
                    className="hover:underline transition mb-1"
                    to={`/dashboard/user/${user.id}`}
                  >
                    {' '}
                    {user.name}
                  </Link>
                </td>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  {user.religion}
                </td>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  {user.marital_status}
                </td>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  {user.profession}
                </td>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  {user.mobile_number}
                </td>
                <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                  {/* {user} */} ff
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Link
                      to={`/dashboard/user/${user.id}`}
                      className="hover:text-primary dark:text-green-400 text-green-500"
                    >
                      <ViewIcon size={24} />
                    </Link>
                    <button className="hover:text-primary dark:text-red-500 text-red-600">
                      <Delete02Icon size={24} />
                    </button>
                    <Link
                      to={`/dashboard/user-update/1`}
                      className="hover:text-primary dark:text-blue-400 text-blue-500"
                    >
                      <PencilEdit02Icon size={24} />
                    </Link>
                    <button className="hover:text-primary dark:text-red-500 text-red-700">
                      <BookmarkRemove01Icon size={24} />
                    </button>
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
