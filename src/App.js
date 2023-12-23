// App.js
import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('form'); // Để xác định trang hiện tại

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Đóng menu khi chọn một trang
  };

  return (
    <div className="App">
      <header>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="menu-line" />
          <div className="menu-line" />
          <div className="menu-line" />
        </div>
        <h1 className="app-title">ỨNG DỤNG QUẢN LÝ BỆNH NHÂN CỦA HUY</h1>
      </header>
      <main className={isMenuOpen ? "menu-open" : ""}>
        {currentPage === 'form' && (
          <div className="form-container">
            <Form />
          </div>
        )}
        {currentPage === 'userList' && (
          <div className="user-list-container">
            <UserList />
          </div>
        )}
      </main>
      <aside className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleMenuClick('form')}>LOGIN</li>
          <li onClick={() => handleMenuClick('userList')}>USERLIST</li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
