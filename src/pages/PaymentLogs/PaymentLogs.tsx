import { useState } from 'react';

const PaymentLogs = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2024-09-19',
      user: 'John Doe',
      amount: '$99.99',
      status: 'Completed',
      refundEligible: true,
    },
    {
      id: 2,
      date: '2024-09-18',
      user: 'Jane Smith',
      amount: '$49.99',
      status: 'Refunded',
      refundEligible: false,
    },
    // Add more transactions as needed
  ]);

  const handleRefund = (id: number) => {
    // Implement refund logic here
    console.log(`Processing refund for transaction ${id}`);
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id
        ? { ...transaction, status: 'Refunded', refundEligible: false }
        : transaction,
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Payment Transaction Logs</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-boxdark shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3 px-6 font-semibold text-sm uppercase">
                Date
              </th>
              <th className="text-left py-3 px-6 font-semibold text-sm uppercase">
                User
              </th>
              <th className="text-left py-3 px-6 font-semibold text-sm uppercase">
                Amount
              </th>
              <th className="text-left py-3 px-6 font-semibold text-sm uppercase">
                Status
              </th>
              <th className="text-center py-3 px-6 font-semibold text-sm uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t">
                <td className="py-3 px-6">{transaction.date}</td>
                <td className="py-3 px-6">{transaction.user}</td>
                <td className="py-3 px-6">{transaction.amount}</td>
                <td
                  className={`py-3 px-6 ${transaction.status === 'Refunded' ? 'text-red-500' : 'text-green-500'}`}
                >
                  {transaction.status}
                </td>
                <td className="py-3 px-6 text-center">
                  {transaction.refundEligible ? (
                    <button
                      onClick={() => handleRefund(transaction.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                      Process Refund
                    </button>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentLogs;
