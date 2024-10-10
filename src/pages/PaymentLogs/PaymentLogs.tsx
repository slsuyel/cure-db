import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAddBlogMutation } from '../../redux/api/admin/adminAuthApi';

const PaymentLogs = () => {
  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
  });

  // Use the addBlog mutation
  const [addBlog, { isLoading, isError, isSuccess }] = useAddBlogMutation();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (value: any) => {
    setFormData({ ...formData, content: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await addBlog({ data: formData, token }).unwrap();
      setFormData({ title: '', content: '', category: '' });
    } catch (error) {
      console.error('Failed to save the blog:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <div className="border rounded p-2">
            <ReactQuill
              value={formData.content}
              onChange={handleContentChange}
              className="h-48 mb-10"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
      {isError && <p className="text-red-500">Failed to submit the log.</p>}
      {isSuccess && (
        <p className="text-green-500">Log submitted successfully!</p>
      )}
    </div>
  );
};

export default PaymentLogs;
