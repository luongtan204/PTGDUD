import React, { useEffect, useState } from 'react';
import { FaDownload, FaUpload, FaPen } from 'react-icons/fa'; // Import icons for Import, Export, and Edit buttons

const Database = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch report data from JSON server
    fetch('http://localhost:3004/reports') // Replace with your JSON server endpoint
      .then((response) => response.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <img src="img\File text 1.png" alt="Report Icon" className="w-6 h-6" />
          Detailed Report
        </h2>
        <div className="flex gap-4">
          {/* Import Button */}
          <button className="flex items-center gap-2 px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-100">
            <FaDownload />
            Import
          </button>
          {/* Export Button */}
          <button className="flex items-center gap-2 px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-100">
            <FaUpload />
            Export
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left text-gray-600">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="p-4 text-left text-gray-600">CUSTOMER NAME</th>
              <th className="p-4 text-left text-gray-600">COMPANY</th>
              <th className="p-4 text-left text-gray-600">ORDER VALUE</th>
              <th className="p-4 text-left text-gray-600">ORDER DATE</th>
              <th className="p-4 text-left text-gray-600">STATUS</th>
              <th className="p-4 text-left text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={report.profileImage}
                    alt={report.customerName}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium text-gray-800">{report.customerName}</span>
                </td>
                <td className="p-4 text-gray-600">{report.company}</td>
                <td className="p-4 text-gray-800 font-medium">${report.orderValue}</td>
                <td className="p-4 text-gray-600">{report.orderDate}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === 'New'
                        ? 'bg-blue-100 text-blue-600'
                        : report.status === 'In-progress'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-green-100 text-green-600'
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="p-4 text-gray-400">
                  <button className="hover:text-pink-500">
                    <FaPen />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600">63 results</span>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded-full bg-pink-500 text-white">1</button>
          <button className="px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200">2</button>
          <button className="px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200">3</button>
          <span className="text-gray-400">...</span>
          <button className="px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200">11</button>
        </div>
      </div>
    </div>
  );
};

export default Database;