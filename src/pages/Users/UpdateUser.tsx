import { useParams } from 'react-router-dom';
import { useProfileInfoUpdateMutation } from '../../redux/api/user/userApi';
import { useState } from 'react';
import { toast } from 'sonner';

const UpdateUser = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [profileInfoUpdate, { isLoading }] = useProfileInfoUpdateMutation();

  const [formData, setFormData] = useState({
    total_cost: '',
    annual_cost: '',
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await profileInfoUpdate({
        data: formData,
        token,
        id,
      }).unwrap();

      if (res.message === 'Descriptions and image updated successfully') {
        toast.success('Descriptions and image updated successfully');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6  shadow-md rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="total_cost"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Total Cost:
          </label>
          <input
            type="number"
            id="total_cost"
            name="total_cost"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="annual_cost"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Annual Cost:
          </label>
          <input
            type="number"
            id="annual_cost"
            name="annual_cost"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLoading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
