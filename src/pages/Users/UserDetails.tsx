import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useUserProfileQuery } from '../../redux/api/user/userApi';

const UserDetails = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const { data, isLoading } = useUserProfileQuery({ token, id });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="mt-4 md:mt-6 mb-20 max-container">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full flex flex-col lg:flex-row gap-5 md:gap-x-8">
              <div className="grow h-full">
                <div className="w-fit mt-2 md:mt-3 lg:mt-4 flex gap-2 md:gap-4">
                  <div className="size-[150px] overflow-hidden rounded-full dark:border-strokedark border">
                    <img
                      alt="profile"
                      loading="lazy"
                      width={150}
                      height={150}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src={data.profile_image}
                    />
                  </div>
                  <div className="ms-10 w-auto flex flex-col justify-between py-0.5">
                    <div>
                      <h1 className="text-base md:text-lg  text-zinc-800 dark:text-white">
                        {data.name}
                      </h1>
                      <h1 className="text-sm md:text-base font-medium  -mt-0.5">
                        {data.email}
                      </h1>
                      <h1 className="text-sm md:text-base font-medium  -mt-0.5">
                        {data.mobile_number}
                      </h1>
                      <h1 className="text-sm md:text-base font-medium  -mt-0.5">
                        {data.whatsapp}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5 md:mt-8  xl:mt-15">
                  <h1 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white">
                    About {data.name}
                  </h1>
                  <p className="text-zinc-700 dark:text-whiter mt-2 text-sm md:text-base">
                    {data.about_myself}
                  </p>
                  <h1 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white mt-6 md:mt-8">
                    Family Details
                  </h1>
                  <div className="overflow-x-auto">
                    <table className="min-w-[100%] shadow-md  border mx-auto dark:border-strokedark border-gray-100 mt-2">
                      <thead>
                        <tr className=" bg-slate-300 dark:bg-boxdark ">
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Father's Occupation:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Mother's Occupation:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-center ">
                            Total Siblings:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base  text-end">
                            Unmarried Siblings:
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300">
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.father_occupation}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.mother_occupation}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base whitespace-nowrap text-center">
                            {data.total_siblings}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base text-start">
                            {data.siblings_not_married}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h1 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white mt-6 md:mt-8">
                    Background
                  </h1>
                  <div className="overflow-x-auto">
                    <table className="min-w-[100%] shadow-md  border mx-auto dark:border-strokedark border-gray-100 mt-2">
                      <thead>
                        <tr className=" bg-slate-300 dark:bg-boxdark ">
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Religion:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Community:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Sub-Community:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Mother Tongue:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Currently Living In:
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300">
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.religion}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.community}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.sub_community}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.mother_tongue}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.currently_living_in}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h1 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white mt-6 md:mt-8">
                    Education & Career
                  </h1>
                  <div className="overflow-x-auto">
                    <table className="min-w-[100%] shadow-md dark:border-strokedark border mx-auto border-gray-100 mt-2">
                      <thead>
                        <tr className=" bg-slate-300 dark:bg-boxdark ">
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Highest Qualification:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            College Name:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base text-left ">
                            Profession:
                          </th>
                          <th className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-base  text-left">
                            Monthly Income:
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300">
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.highest_qualification}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.college_name}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.profession}
                          </td>
                          <td className="py-2 md:py-4 px-4 md:px-6  text-xs md:text-base">
                            {data.monthly_income}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-full lg:max-w-[400px] 2xl:max-w-[500px] lg:sticky lg:top-28 h-fit">
                <div className=" shrink-0 dark:border-strokedark border">
                  <div className=" w-full py-2 md:py-3 px-4 md:px-6  bg-slate-300 dark:bg-boxdark">
                    <h1 className="text-base font-semibold ">
                      General Info of {data.name}
                    </h1>
                  </div>
                  <div className="mt-3 w-full space-y-2 px-4 md:px-6 pb-3 md:pb-4">
                    <table className="w-full ">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left text-gray-600">
                            Title
                          </th>
                          <th className="px-4 py-2 text-left text-gray-600">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td className="px-4 py-2  text-gray-800">
                            Marital Status
                          </td>
                          <td className="px-4 py-2 text-gray-600">
                            {data.marital_status}
                          </td>
                        </tr>
                        <tr className="">
                          <td className="px-4 py-2  text-gray-800">Age</td>
                          <td className="px-4 py-2 text-gray-600">
                            {data.age} years
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2  text-gray-800">Height</td>
                          <td className="px-4 py-2 text-gray-600">
                            {data.height} in
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* FOLLOWERS */}

                <div className=" mt-4">
                  <div className="flex justify-between mb-0">
                    <h1 className="text-base font-semibold flex items-center gap-2 mb-3">
                      Followers{' '}
                      <span className="h-[25px] w-[25px] dark:bg-boxdark bg-purple-200 rounded-full flex items-center justify-center">
                        7
                      </span>
                    </h1>

                    <Link className="text-blue-500" to={``}>
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2  border border-strokedark p-4 rounded-lg shadow-md">
                      <div>
                        <Link
                          to={`/dashboard/user/11`}
                          className="text-lg font-semibold text-blue-900"
                        >
                          Name: Suyel Haque
                        </Link>
                        <h4 className="text-sm text-gray-600">
                          Email: slsuyel@gmail.com
                        </h4>
                        <h4 className="text-sm text-gray-600">
                          Phone: 01722597565
                        </h4>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Status: Unmarried
                        </h3>
                        <h4 className="text-sm text-gray-600">
                          Address: Dhaka, Bangladesh
                        </h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-2  border border-strokedark p-4 rounded-lg shadow-md">
                      <div>
                        <Link
                          to={`/dashboard/user/11`}
                          className="text-lg font-semibold text-blue-900"
                        >
                          Name: Suyel Haque
                        </Link>
                        <h4 className="text-sm text-gray-600">
                          Email: slsuyel@gmail.com
                        </h4>
                        <h4 className="text-sm text-gray-600">
                          Phone: 01722597565
                        </h4>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Status: Unmarried
                        </h3>
                        <h4 className="text-sm text-gray-600">
                          Address: Dhaka, Bangladesh
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FOLLOWING */}

                <div className=" mt-4">
                  <div className="flex justify-between mb-0">
                    <h1 className="text-base font-semibold flex items-center gap-2 mb-3">
                      Followings{' '}
                      <span className="h-[25px] w-[25px] dark:bg-boxdark bg-purple-200 rounded-full flex items-center justify-center">
                        7
                      </span>
                    </h1>

                    <Link className="text-blue-500" to={``}>
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2  border border-strokedark p-4 rounded-lg shadow-md">
                      <div>
                        <Link
                          to={`/dashboard/user/11`}
                          className="text-lg font-semibold text-blue-900"
                        >
                          Name: Suyel Haque
                        </Link>
                        <h4 className="text-sm text-gray-600">
                          Email: slsuyel@gmail.com
                        </h4>
                        <h4 className="text-sm text-gray-600">
                          Phone: 01722597565
                        </h4>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Status: Unmarried
                        </h3>
                        <h4 className="text-sm text-gray-600">
                          Address: Dhaka, Bangladesh
                        </h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-2  border border-strokedark p-4 rounded-lg shadow-md">
                      <div>
                        <Link
                          to={`/dashboard/user/11`}
                          className="text-lg font-semibold text-blue-900"
                        >
                          Name: Suyel Haque
                        </Link>
                        <h4 className="text-sm text-gray-600">
                          Email: slsuyel@gmail.com
                        </h4>
                        <h4 className="text-sm text-gray-600">
                          Phone: 01722597565
                        </h4>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Status: Unmarried
                        </h3>
                        <h4 className="text-sm text-gray-600">
                          Address: Dhaka, Bangladesh
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
