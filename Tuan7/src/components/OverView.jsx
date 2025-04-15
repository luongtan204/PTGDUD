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
    <div className="p-6 bg-gray-300 h-50 ">
     
      
    </div>
  );
};

export default OverView;