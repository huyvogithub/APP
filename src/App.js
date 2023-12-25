// App.js
import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
import ThreeDComponent from './components/ThreeDComponent';
import SmallFrame from './components/SmallFrame';

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

        {currentPage === 'userList2' && (


          <div className="user-list-container">
            <ThreeDComponent />
          </div>

        )}

        {currentPage === 'PAGE4' && (


          <div className="user-list-container">
            <SmallFrame />
          </div>

        )}


      </main>
      <aside className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleMenuClick('form')}>LOGIN</li>
          <li onClick={() => handleMenuClick('userList')}>USERLIST</li>
          <li onClick={() => handleMenuClick('userList2')}>DANH SÁCH NGƯỜI DÙNG</li> {/* Thêm mục mới */}
          <li onClick={() => handleMenuClick('PAGE4')}>MÔ PHỎNG CHUYỂN ĐỘNG</li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
