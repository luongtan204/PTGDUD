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
    <div className="p-6 bg-gray-300 h-200">
     
    </div>
  );
};

export default Database;