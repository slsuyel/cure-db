import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEditBlogMutation } from '../../redux/api/admin/adminAuthApi';
import { toast } from 'sonner';

const EditBlog = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [editBlog, { isLoading }] = useEditBlogMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      title,
      content,
      category,
    };
    await editBlog({ data, token, id });
    navigate('/dashboard/all-blogs');

    toast.success('Blog updated successfully');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter blog title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-700"
          >
            Category
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter blog category"
          />
        </div>

        {/* Content Input */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-lg font-medium text-gray-700"
          >
            Content
          </label>
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            className="h-48 mb-10"
          />
        </div>

        <div className="flex justify-center mt-20">
          <button
            disabled={isLoading}
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-medium text-lg rounded-md hover:bg-blue-600 transition duration-300"
          >
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
