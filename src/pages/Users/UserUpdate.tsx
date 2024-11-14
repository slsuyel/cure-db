import { useState } from 'react';
import { useProfileUpdateMutation } from '../../redux/api/user/userApi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import ReactQuill, { Quill } from 'react-quill';
import QuillResizeImage from 'quill-resize-image';
Quill.register('modules/resize', QuillResizeImage);

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    [{ align: [] }],
    ['clean'],
  ],
  resize: {
    modules: ['Resize', 'DisplaySize'],
    displaySize: true,
  },
};

import 'react-quill/dist/quill.snow.css';

const UserUpdate = () => {
  const [profileUpdate, { isLoading }] = useProfileUpdateMutation();
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
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

  const handleQuillChange = (value: string) => {
    setFormData({
      ...formData,
      long_description: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await profileUpdate({ data: formData, token, id }).unwrap();
      console.log(res);
      if (res.message === 'Descriptions updated successfully') {
        navigate('/dashboard/all-patients');
        toast.success('Descriptions updated successfully');
      }
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  return (
    <div className="mx-auto p-4">
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
            rows={4}
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
          <ReactQuill
            value={formData.long_description}
            onChange={handleQuillChange}
            className="bg-white text-gray-700 mb-10 overflow-scroll h-[400px]"
            theme="snow"
            placeholder="Enter detailed description..."
            modules={modules}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UserUpdate;
