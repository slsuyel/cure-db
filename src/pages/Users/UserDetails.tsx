import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useUserProfileQuery } from '../../redux/api/user/userApi';

const UserDetails = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const { data, isLoading } = useUserProfileQuery({ token, id });

  if (isLoading) {
    return <Loader />;
  }

  /* {
    "id": 1,
    "image": "user_images\/1731066412_05a38c818f04a400671e8e78210075f1d8fe5421ed564976.jpg",
    "name": "name",
    "mobile": "name",
    "blood_group": "name",
    "email": "name",
    "gander": "Male",
    "gardiant_phone": "n",
    "whatsapp_number": "n",

    "role": "n",
    "role_id": 0,
    "created_at": "2024-07-13T15:13:12.000000Z",
    "updated_at": "2024-11-08T11:46:52.000000Z",
    "fullName": "n",
    "relationship": "n",
    "diagnosedForSMA": false,
    "symptoms": false,
    "typeOfSMA": "n",
    "doctorName": "n",
    "fatherMobile": "n",
    "motherMobile": "n",
    "emergencyContact": "n",
    "presentAddress": "n",
    "permanentAddress": null,
    "agreement": false,
    "dateOfBirth": "2024-07-12T18:00:00.000000Z",
    "annual_cost": "100.00",
    "total_cost": "499.00",
    "cost_donated": "0.00",
    "short_description": "India and South Africa piled up the two highest totals at the Women\u2019s T20 World Cup on Wednesday to stay on track for the semi-finals.",
    "long_description": "India and South Africa piled up the two highest totals at the Women\u2019s T20 World Cup on Wednesday to stay on track for the semi-finals.\n\nIndia and South Africa piled up the two highest totals at the Women\u2019s T20 World Cup on Wednesday to stay on track for the semi-finals.",
    "profile_image": "https:\/\/api.curesmabangladesh.org\/protected\/image\/user_images\/1731066412_05a38c818f04a400671e8e78210075f1d8fe5421ed564976.jpg"
} */

  return (
    <div className="">
      <div className="mt-4 md:mt-6 mb-20 max-container">
        <div className="w-full">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="">
              {/* Profile Image Section */}

              {/* Details Section */}
              <div className="grid gap-6 ">
                <h2 className="text-2xl font-bold mb-4">{data.fullName}</h2>

                {/* Personal Information Table */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-1">
                    <img
                      src={
                        data.profile_image ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SnDtnoTbs_JJtNW62ALeA4gKPtpCGcQ5CnVEJNNAddxjuLwrbo1c16rExrxYL4xLmIw&usqp=CAU'
                      }
                      width={150}
                      alt={data.fullName}
                      className=" h-auto rounded-lg shadow-sm"
                    />
                  </div>

                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold mb-4">
                      Personal Information
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-200">
                        <tbody>
                          <tr className="bg-gray-50">
                            <td className="font-semibold px-4 py-2 border border-gray-200">
                              Email
                            </td>
                            <td className="px-4 py-2 border border-gray-200">
                              {data.email}
                            </td>
                          </tr>
                          <tr>
                            <td className="font-semibold px-4 py-2 border border-gray-200">
                              Gender
                            </td>
                            <td className="px-4 py-2 border border-gray-200">
                              {data.gander}
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="font-semibold px-4 py-2 border border-gray-200">
                              Blood Group
                            </td>
                            <td className="px-4 py-2 border border-gray-200">
                              {data.blood_group}
                            </td>
                          </tr>
                          <tr>
                            <td className="font-semibold px-4 py-2 border border-gray-200">
                              Mobile
                            </td>
                            <td className="px-4 py-2 border border-gray-200">
                              {data.mobile}
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="font-semibold px-4 py-2 border border-gray-200">
                              WhatsApp
                            </td>
                            <td className="px-4 py-2 border border-gray-200">
                              {data.whatsapp_number}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Medical Information Table */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Medical Information
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <tbody>
                        <tr className="bg-gray-50">
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Doctor Name
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.doctorName}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Type of SMA
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.typeOfSMA}
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Diagnosed for SMA
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.diagnosedForSMA ? 'Yes' : 'No'}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Symptoms
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.symptoms ? 'Yes' : 'No'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <tbody>
                        <tr className="bg-gray-50">
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Father's Mobile
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.fatherMobile}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Mother's Mobile
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.motherMobile}
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Emergency Contact
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.emergencyContact}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Guardian Phone
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.gardiant_phone}
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Relationship
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.relationship}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Address Information
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <tbody>
                        <tr className="bg-gray-50">
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Present Address
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.presentAddress}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Permanent Address
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            {data.permanentAddress || 'Not provided'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Cost Information
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <tbody>
                        <tr className="bg-gray-50">
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Total Cost
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            ${data.total_cost}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Annual Cost
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            ${data.annual_cost}
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="font-semibold px-4 py-2 border border-gray-200">
                            Cost Donated
                          </td>
                          <td className="px-4 py-2 border border-gray-200">
                            ${data.cost_donated}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Description</h3>
                  <p className="text-gray-600 mb-4">{data.short_description}</p>
                  <hr />
                  <p className="text-gray-600 whitespace-pre-line">
                    {data.long_description}
                  </p>
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
