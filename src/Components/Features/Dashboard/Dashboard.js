import React from 'react';
import {
  UsersIcon,
  ClipboardDocumentIcon,
  BoltIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  const stats = [
    { title: 'Total Services', value: 10, icon: <BoltIcon className="h-8 w-8 text-blue-500" /> },
    { title: 'Total Members', value: 120, icon: <UsersIcon className="h-8 w-8 text-green-500" /> },
    { title: 'Active Programs', value: 8, icon: <ClipboardDocumentIcon className="h-8 w-8 text-yellow-500" /> },
    { title: 'Revenue', value: '$12,500', icon: <CurrencyDollarIcon className="h-8 w-8 text-red-500" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-lg font-semibold text-gray-600 mb-2">{item.title}</h2>
            <p className="text-3xl font-bold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
