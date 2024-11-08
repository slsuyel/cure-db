import { useState } from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import { useProfileUpdateMutation } from '../../redux/api/user/userApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const UserUpdate = () => {
  const [profileUpdate, { isLoading }] = useProfileUpdateMutation();

  const { id } = useParams();
  const token = localStorage.getItem('token');

  // Updated initial form data structure
  const [formData, setFormData] = useState({
    short_description: '',
    long_description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await profileUpdate({ data: formData, token, id }).unwrap();
      console.log(res);
      if (res.message === 'Descriptions updated successfully') {
        toast.success('Descriptions updated successfully');
      }
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  return (
    <div className=" mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Patient Descriptions</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="short_description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Short Description:
          </label>
          <textarea
            id="short_description"
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            required
            rows={4} // Set the number of visible rows
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="long_description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Long Description:
          </label>
          <textarea
            id="long_description"
            name="long_description"
            value={formData.long_description}
            onChange={handleChange}
            required
            rows={6}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UserUpdate;
