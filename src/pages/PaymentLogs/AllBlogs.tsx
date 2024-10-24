
import Loader from "../../components/Loader";
import { useAllBlogsQuery } from "../../redux/api/admin/adminAuthApi";
import { Edit01Icon, Delete01Icon } from 'hugeicons-react';  // Importing icons

const AllBlogs = () => {
    const token = localStorage.getItem('token'); 
    const { data: blogs, isLoading } = useAllBlogsQuery({ token });

    if (isLoading) {
        return <Loader/>
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
                    {blogs?.map((blog:any) => (
                        <tr key={blog.id} className="border-t border-gray-300">
                            <td className="py-2 px-4">{blog.title}</td>
                            <td className="py-2 px-4">{blog.category}</td>
                            <td className="py-2 px-4">{new Date(blog.created_at).toLocaleDateString()}</td>
                            <td className="py-2 px-4">
                                <button className="text-blue-600 hover:text-blue-800 mr-4">
                                    <Edit01Icon />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
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
