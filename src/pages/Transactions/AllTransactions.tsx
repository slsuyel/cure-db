import { useState } from 'react';
import Loader from '../../components/Loader';
import { useAllTransactionsQuery } from '../../redux/api/admin/adminAuthApi';
export interface TTransactions {
  current_page: number;
  data: Datum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface Datum {
  id: number;
  donate_for: null;
  union: Union;
  trxId: string;
  amount: string;
  applicant_mobile: string;
  status: Status;
  date: Date;
  month: Month;
  year: string;
  paymentUrl: string;
  ipnResponse: string;
  method: Method;
  payment_type: PaymentType;
  balance: null;
  created_at: Date;
  updated_at: Date;
}

export enum Method {
  BKash = 'bKash',
  Nagad = 'Nagad',
  SitPG = 'SIT-PG',
}

export enum Month {
  August = 'August',
  November = 'November',
  September = 'September',
}

export enum PaymentType {
  Online = 'online',
}

export enum SonodType {
  PatientDonate = 'patient-donate',
}

export enum Status {
  Paid = 'Paid',
}

export enum Union {
  Empty = '-',
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

const AllTransactions = () => {
  const token = localStorage.getItem('token');
  const { data, isLoading } = useAllTransactionsQuery({ token });

  if (isLoading) {
    return <Loader />;
  }
  console.log(data);
  return (
    <div className="mt-4 md:mt-6 mb-20 max-container">
      <div className="w-full">
        <div className=" shadow-md rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Method
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                {data?.data?.map((transaction: any) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.trxId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ৳{transaction.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.method}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(transaction.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
