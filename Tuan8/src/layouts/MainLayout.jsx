import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Đảm bảo import đúng

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;