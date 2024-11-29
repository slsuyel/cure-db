import React, { useState } from 'react';
import { useProfileUpdateMutation } from '../../redux/api/user/userApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

// Register the Quill Resize Image module

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['link', ''],
    [{ align: [] }],
    ['clean'],
  ],
};

interface FormDataState {
  short_description: string;
  long_description: string;
  annual_cost: number;
  total_cost: string;
  image: File | null;
  fullName: string;
  relationship: string;
  diagnosedForSMA: string;
  symptoms: string;
  typeOfSMA: string;
  doctorName: string;
  fatherMobile: string;
  motherMobile: string;
  emergencyContact: string;
  email: string;
  presentAddress: string;
  permanentAddress: string;
  agreement: number;
  dateOfBirth: string;
}

export default function UserUpdate() {
  const [profileUpdate, { isLoading }] = useProfileUpdateMutation();
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState<FormDataState>({
    short_description: '',
    long_description: '',
    annual_cost: 0,
    total_cost: '',
    image: null,
    fullName: '',
    relationship: '',
    diagnosedForSMA: '',
    symptoms: '',
    typeOfSMA: '',
    doctorName: '',
    fatherMobile: '',
    motherMobile: '',
    emergencyContact: '',
    email: '',
    presentAddress: '',
    permanentAddress: '',
    agreement: 1,
    dateOfBirth: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'annual_cost' ? Number(value) : value,
    }));
  };

  const handleQuillChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      long_description: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files ? e.target.files[0] : null,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value as string | Blob);
      }
    });

    try {
      const res = await profileUpdate({
        data: formDataToSend,
        token,
        id,
      }).unwrap();
      console.log(res);
      if (res.message === 'User information updated successfully') {
        toast.success('User information updated successfully');
      }
    } catch (error) {
      console.error('Failed to update user:', error);
      toast.error('Failed to update user.');
    }
  };

  return (
    <div className="relative py-3 max-w-4xl mx-auto">
      <div className="relative bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Update User Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Short Description</label>
            <textarea
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Long Description</label>
            <ReactQuill
              value={formData.long_description}
              onChange={handleQuillChange}
              className="bg-white text-gray-700 mb-4 h-[150px]"
              theme="snow"
              placeholder="Enter detailed description..."
              modules={modules}
            />
          </div>

          <br />
          <div className="">
            <label className="block text-gray-700">Annual Cost</label>
            <input
              type="number"
              name="annual_cost"
              value={formData.annual_cost}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Total Cost</label>
            <input
              type="number"
              name="total_cost"
              value={formData.total_cost}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Image <span className="text-sm text-danger">(440*320)</span>
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Relationship</label>
            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Diagnosed For SMA</label>
            <select
              name="diagnosedForSMA"
              value={formData.diagnosedForSMA}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Have Symptoms</label>
            <select
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isLoading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
}
