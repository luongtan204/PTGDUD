import React, { useEffect, useState } from 'react';
import { FaDownload, FaUpload, FaPen, FaPlus } from 'react-icons/fa';

const Database = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null); // Report được chọn để chỉnh sửa
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở modal
  const [isAddMode, setIsAddMode] = useState(false); // Trạng thái thêm mới
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const rowsPerPage = 5; // Số hàng mỗi trang

  useEffect(() => {
    // Fetch report data từ JSON server
    fetch('http://localhost:3004/reports')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch reports');
        }
        return response.json();
      })
      .then((data) => setReports(data))
      .catch((error) => console.error('Error fetching reports:', error));
  }, []);

  // Tính toán dữ liệu hiển thị cho trang hiện tại
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = reports.slice(indexOfFirstRow, indexOfLastRow);

  // Tổng số trang
  const totalPages = Math.ceil(reports.length / rowsPerPage);

  // Hàm chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Hàm mở modal để thêm mới
  const handleAddClick = () => {
    setSelectedReport({
      customerName: '',
      company: '',
      orderValue: '',
      orderDate: '',
      status: 'New',
    });
    setIsAddMode(true);
    setIsModalOpen(true);
  };

  // Hàm mở modal để chỉnh sửa
  const handleEditClick = (report) => {
    setSelectedReport(report);
    setIsAddMode(false);
    setIsModalOpen(true);
  };

  // Hàm xử lý khi người dùng thay đổi dữ liệu trong modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedReport({ ...selectedReport, [name]: value });
  };

  // Hàm lưu dữ liệu chỉnh sửa hoặc thêm mới
  const handleSave = () => {
    if (isAddMode) {
      // Thêm mới (POST)
      fetch('http://localhost:3004/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedReport),
      })
        .then((response) => response.json())
        .then((newReport) => {
          setReports((prevReports) => [...prevReports, newReport]);
          setIsModalOpen(false); // Đóng modal
        });
    } else {
      // Chỉnh sửa (PUT)
      fetch(`http://localhost:3004/reports/${selectedReport.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedReport),
      })
        .then((response) => response.json())
        .then((updatedReport) => {
          setReports((prevReports) =>
            prevReports.map((report) =>
              report.id === updatedReport.id ? updatedReport : report
            )
          );
          setIsModalOpen(false); // Đóng modal
        });
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <img src="img\File text 1.png" alt="Report Icon" className="w-6 h-6" />
          Detailed Report
        </h2>
        <div className="flex gap-4">
          {/* Add User Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            onClick={handleAddClick}
          >
            <FaPlus />
            Add User
          </button>
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
            {currentRows.map((report) => (
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
                    className={`px-3 py-1 rounded-full text-sm font-medium ${report.status === 'New'
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
                  <button
                    className="hover:text-pink-500"
                    onClick={() => handleEditClick(report)}
                  >
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
        {/* Tổng số kết quả */}
        <div className="text-gray-600">
          Total Results: <span className="font-bold">{reports.length}</span>
        </div>

        {/* Thanh phân trang */}
        <div className="flex items-center gap-2">
          <button
            className={`px-3 py-1 rounded-full ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-3 py-1 rounded-full ${currentPage === index + 1
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-3 py-1 rounded-full ${currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300'
              }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Edit/Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">
              {isAddMode ? 'Add User' : 'Edit Report'}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={selectedReport.customerName}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={selectedReport.company}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Order Value</label>
              <input
                type="text"
                name="orderValue"
                value={selectedReport.orderValue}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Order Date</label>
              <input
                type="text"
                name="orderDate"
                value={selectedReport.orderDate}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={selectedReport.status}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-pink-500 text-white rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Database;