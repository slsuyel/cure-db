import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  useEditBlogMutation,
  useSingleBlogQuery,
} from '../../redux/api/admin/adminAuthApi';
import { toast } from 'sonner';
import Loader from '../../components/Loader';
import { ImageUploadIcon } from 'hugeicons-react';

const EditBlog = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [editBlog, { isLoading }] = useEditBlogMutation();
  const { data, isLoading: loading } = useSingleBlogQuery({ id, token });
  const navigate = useNavigate();

  // Set the form fields when data is loaded
  useEffect(() => {
    if (data) {
      setTitle(data.title || ''); // Set the current title
      setContent(data.content || ''); // Set the current content
      setCategory(data.category || ''); // Set the current category
    }
  }, [data]);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(image);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);

    if (image) {
      formData.append('image', image);
    }
    try {
      const res = await editBlog({ data: formData, token, id });
      if (res.data) {
        toast.success('Blog updated successfully');
        navigate('/dashboard/all-blogs');
      } else {
        toast.error('Blog update failed. Please try again.');
      }
    } catch (error) {
      toast.error(
        'An error occurred while updating the blog. Please try again.',
      );
      console.error(error);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto p-6  shadow-md rounded-lg">
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
            className="mt-1 block w-full p-2 border rounded-md dark:bg-boxdark"
            placeholder="Enter blog title"
          />
        </div>

        {/* Category Input */}
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
            className="mt-1 block w-full p-2 border rounded-md dark:bg-boxdark"
            placeholder="Enter blog category"
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
              <span className="text-primary">Click to upload </span>
            </p>
            <span className=" text-danger">Image size = 3:2</span>
            <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
          </div>
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
