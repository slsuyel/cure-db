import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAddBlogMutation } from '../../redux/api/admin/adminAuthApi';
import { ImageUploadIcon } from 'hugeicons-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const PaymentLogs = () => {
  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    image: null,
  });

  const [addBlog, { isLoading }] = useAddBlogMutation();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (value: any) => {
    setFormData({ ...formData, content: value });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('category', formData.category);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      await addBlog({ data: formDataToSend, token }).unwrap();
      setFormData({ title: '', content: '', category: '', image: null });
      navigate('/dashboard/all-blogs');
      toast.success('Blog saved successfully!');
    } catch (error) {
      console.error('Failed to save the blog:', error);
      toast.error('Failed to save the blog. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white dark:bg-boxdark shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
            className="dark:bg-boxdark appearance-none border rounded w-full py-2 px-3"
            required
          />
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
            className="dark:bg-boxdark shadow appearance-none border rounded w-full py-2 px-3"
            required
          />
        </div>

        <div
          id="FileUpload"
          className="w-100 relative mb-5.5 block  cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
        >
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
              <ImageUploadIcon size={24} />
            </span>
            <p>
              <span className="text-primary">Click to upload</span>
            </p>
            <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
          </div>
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

        {/* File Upload Section */}

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
    </div>
  );
};

export default PaymentLogs;
