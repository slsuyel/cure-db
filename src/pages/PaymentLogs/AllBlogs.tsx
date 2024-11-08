import { toast } from 'sonner';
import Loader from '../../components/Loader';
import {
  useAllBlogsQuery,
  useDeleteBlogMutation,
} from '../../redux/api/admin/adminAuthApi';
import { Edit01Icon, Delete01Icon } from 'hugeicons-react';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
  const token = localStorage.getItem('token');
  const { data: blogs, isLoading } = useAllBlogsQuery({ token });
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this blog?',
    );

    if (confirmed) {
      try {
        await deleteBlog({ id, token });
        toast.success('Blog deleted successfully');
      } catch (error) {
        console.error('Failed to delete blog:', error);
        toast.error('Error deleting blog. Please try again.');
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4"> All Blogs </h1>
      <table className="min-w-full bg-white dark:bg-boxdark border border-gray-300 shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Title</th>
            <th className="py-2 px-4 text-left">Category</th>
            <th className="py-2 px-4 text-left">Created At</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog: any) => (
            <tr key={blog.id} className="border-t border-gray-300">
              <td className="py-2 px-4">{blog.title}</td>
              <td className="py-2 px-4">{blog.category}</td>
              <td className="py-2 px-4">
                {new Date(blog.created_at).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 flex items-center justify-center">
                <Link
                  to={`/dashboard/edit-blog/${blog.id}`}
                  className="text-blue-600 hover:text-blue-800 mr-4"
                >
                  <Edit01Icon />
                </Link>

                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Delete01Icon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;
