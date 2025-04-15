import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaDollarSign, FaUserPlus } from 'react-icons/fa';

const OverView = () => {
  const [data, setData] = useState({
    turnover: null,
    profit: null,
    newCustomers: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const turnoverResponse = await fetch('http://localhost:3001/turnover');
        const profitResponse = await fetch('http://localhost:3002/profit');
        const newCustomersResponse = await fetch('http://localhost:3003/newCustomers');

        const turnover = await turnoverResponse.json();
        const profit = await profitResponse.json();
        const newCustomers = await newCustomersResponse.json();

        setData({
          turnover: turnover.amount,
          profit: profit.amount,
          newCustomers: newCustomers.count,
          newCustomersChange: newCustomers.change,
          profitChange: profit.change,
          turnoverChange: turnover.change,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <img src="\img\Squares four 1.png" alt="" /> Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Turnover Card */}
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <div>
            <h3 className="text-lg font-semibold mb-2">Turnover</h3>
            <p className="text-2xl font-bold text-gray-800">${data.turnover || 'Loading...'}</p>
            <p className="text-green-500 text-sm mt-2">▲ {data.turnoverChange}% <span className='text-gray-500'>period of change</span></p>
          </div>
          <div className="absolute top-4 right-4 border border-pink-500 rounded-xl p-2 hover:bg-pink-100">
            <FaShoppingCart className="text-pink-500 text-2xl" />
          </div>
        </div>

        {/* Profit Card */}
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <div>
            <h3 className="text-lg font-semibold mb-2">Profit</h3>
            <p className="text-2xl font-bold text-gray-800">${data.profit || 'Loading...'}</p>
            <p className="text-green-500 text-sm mt-2">▲ {data.profitChange}% <span className='text-gray-500'>period of change</span></p>
          </div>
          <div className="absolute top-4 right-4 border border-blue-500 rounded-xl p-2 hover:bg-blue-100">
            <FaDollarSign className="text-blue-500 text-2xl" />
          </div>
        </div>

        {/* New Customers Card */}
        <div className="bg-white shadow-md rounded-lg p-6 relative">
          <div>
            <h3 className="text-lg font-semibold mb-2">New Customers</h3>
            <p className="text-2xl font-bold text-gray-800">{data.newCustomers || 'Loading...'}</p>
            <p className="text-green-500 text-sm mt-2">▲ {data.newCustomersChange}% <span className='text-gray-500'>period of change</span></p>
          </div>
          <div className="absolute top-4 right-4 border border-blue-500 rounded-xl p-2 hover:bg-blue-100">
            <FaUserPlus className="text-blue-500 text-2xl" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default OverView;