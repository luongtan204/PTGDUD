import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">ABC Restaurant</Link>
        <div className="navbar-links">
          <Link className="nav-link" to="/">Trang chủ</Link>
          <Link className="nav-link" to="/menu">Thực đơn</Link>
          <Link className="nav-link" to="/contact">Liên hệ</Link>
        </div>
        <button className="btn-book-table">Book Table</button>
      </div>
    </nav>
  );
}

export default Header;