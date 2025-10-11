import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import RoutesAdmin from './AppRoutes/RoutesAdmin'; 
// 1. IMPORT CÁC THÀNH PHẦN CỦA REACT-TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
       {/* 2. THÊM TOASTCONTAINER VÀO ĐÂY */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">Logo</div>
        <nav className="mt-5">
          <ul>
            <li className="p-4 hover:bg-gray-700 transition-colors duration-200"><Link to="#">Dashboard</Link></li>
            <li className="p-4 hover:bg-gray-700 transition-colors duration-200"><Link to="/products">Sản phẩm</Link></li>
            <li className="p-4 hover:bg-gray-700 transition-colors duration-200"><Link to="/categories">Danh mục</Link></li>
            <li className="p-4 hover:bg-gray-700 transition-colors duration-200"><Link to="#">Người dùng</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="p-4 bg-white border-b flex justify-between items-center">
          <h1 className="text-xl font-semibold">Quản trị hệ thống</h1>
          <div className="flex items-center">
             <button className="bg-blue-500 text-white py-2 px-4 rounded">Điện thoại</button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            {/* Gọi file RoutesAdmin để xử lý việc hiển thị trang con */}
            <RoutesAdmin />
        </main>
      </div>
    </div>
  );
}

export default App;