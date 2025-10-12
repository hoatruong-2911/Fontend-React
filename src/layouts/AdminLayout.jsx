import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "bg-gray-700 text-white"
      : "text-gray-300 hover:bg-gray-700";

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-300 flex-shrink-0 flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700 text-white">
          Admin Panel
        </div>
        <nav className="mt-5 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <Link to="/admin/products" className={`block p-4 rounded ${isActive("/admin/products")}`}>
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link to="/admin/categories" className={`block p-4 rounded ${isActive("/admin/categories")}`}>
                Danh mục
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">Đăng xuất</button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="p-4 bg-white border-b flex justify-between items-center shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800">Quản trị hệ thống</h1>
          <div className="flex items-center gap-3">
            <span className="text-gray-700">Xin chào, Admin</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Điện thoại</button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
