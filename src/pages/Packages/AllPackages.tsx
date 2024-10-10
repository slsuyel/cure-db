import { useState } from 'react';
import Loader from '../../components/Loader';
import {
  usePackagesQuery,
  useDeletePackageMutation,
} from '../../redux/api/packages/packageApi';
import { TPackage } from '../../types/type';
import { toast } from 'sonner';
import Button from '../../components/ui/button';
import { Link } from 'react-router-dom';

const AllPackages = () => {
  const { data, isLoading } = usePackagesQuery(undefined);
  const [deletePackage] = useDeletePackageMutation();
  const [editingPlan, setEditingPlan] = useState<TPackage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    package_name: '',
    price: '',
    discount: '',
    sub_total_price: '',
    duration: '',
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleOpenModal = (plan?: TPackage) => {
    if (plan) {
      setEditingPlan(plan);
      setFormData({
        package_name: plan.package_name,
        price: plan.price,
        discount: plan.discount,
        sub_total_price: plan.sub_total_price,
        duration: plan.duration.toString(),
      });
    } else {
      setEditingPlan(null);
      setFormData({
        package_name: '',
        price: '',
        discount: '',
        sub_total_price: '',
        duration: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    handleCloseModal();
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this package?',
    );
    if (confirmed) {
      try {
        const res = await deletePackage(id);

        if (res.data) {
          toast.success('Package deleted successfully!');
        }
        if (res.error) {
          toast.error(`Error: An error occurred.`);
          console.log(res);
          return;
        }

        console.log(res);
      } catch (error) {
        toast.error('Failed to delete package. Please try again.');
      }
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Subscription Plans
      </h1>

      <Button
        variant="primary"
        onClick={() => handleOpenModal()}
        className="mb-5"
      >
        Add New Plan
      </Button>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Package Name</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Discount</th>
              <th className="py-2 px-4 border">Sub Total Price</th>
              <th className="py-2 px-4 border">Duration (months)</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((plan: TPackage) => (
              <tr key={plan.id}>
                <td className="py-2 px-4 border underline">
                  <Link to={`/dashboard/package/${plan.id}`}>
                    {plan.package_name}
                  </Link>
                </td>
                <td className="py-2 px-4 border">${plan.price}</td>
                <td className="py-2 px-4 border">{plan.discount}%</td>
                <td className="py-2 px-4 border">${plan.sub_total_price}</td>
                <td className="py-2 px-4 border">{plan.duration}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleOpenModal(plan)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="dark:bg-black bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-300">
            <h2 className="text-xl mb-4">
              {editingPlan ? 'Edit Package' : 'Add New Package'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Package Name</label>
                <input
                  type="text"
                  value={formData.package_name}
                  onChange={(e) =>
                    setFormData({ ...formData, package_name: e.target.value })
                  }
                  className="border rounded p-2 w-full dark:bg-boxdark"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="border rounded p-2 w-full dark:bg-boxdark"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Discount</label>
                <input
                  type="text"
                  value={formData.discount}
                  onChange={(e) =>
                    setFormData({ ...formData, discount: e.target.value })
                  }
                  className="border rounded p-2 w-full dark:bg-boxdark"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Duration (months)</label>
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                  className="border rounded p-2 w-full dark:bg-boxdark"
                  required
                />
              </div>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="bg-blue-500 text-white py-2 rounded"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPackages;
