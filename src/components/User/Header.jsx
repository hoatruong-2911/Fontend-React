import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      {/* Thanh trên cùng */}
      <div className="topbar bg-slate-900 text-white text-sm py-2">
        <div className="container flex justify-between items-center">
          <div>
            Hotline: <strong>1900 8888</strong> · TechZone Store — 123 Nguyễn Văn Linh, Hà Nội
          </div>
          <div>
            <Link to="/user/login" style={{ color: "#fff" }}>
              Đăng nhập
            </Link>
            <span style={{ opacity: 0.6, padding: "0 6px" }}>hoặc</span>
            <Link to="/user/register" style={{ color: "#fff" }}>
              Đăng ký
            </Link>
          </div>
        </div>
      </div>

      {/* Thanh điều hướng */}
      <nav className="nav bg-white shadow">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link className="brand" to="/user">
            <img
              src="/logo.png"
              alt="TechZone"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Ô tìm kiếm */}
          <div className="search w-1/2">
            <input
              placeholder="Tìm kiếm sản phẩm: laptop, điện thoại, tai nghe..."
              className="w-full border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Nút giỏ hàng */}
          <Link
            to="/user/cart"
            className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Giỏ hàng (0)
          </Link>
        </div>

        {/* Thanh menu chính */}
        <div className="container flex items-center gap-6 py-2 font-semibold text-slate-700">
          <Link to="/user">Trang chủ</Link>

          {/* Mega menu */}
          <div className="mega relative group">
            <Link
              to="/user/products"
              className="inline-flex items-center gap-1 hover:text-blue-600"
            >
              Sản phẩm ▾
            </Link>

            {/* Bảng danh mục lớn */}
            <div className="mega-panel absolute left-0 top-full bg-white border rounded-lg shadow-xl p-4 w-[900px] hidden group-hover:grid grid-cols-4 gap-6 z-50">
              <div>
                <h4 className="font-bold mb-2 text-slate-900">Laptop</h4>
                <ul className="space-y-1 text-slate-600">
                  <li><Link to="/user/products?cat=laptop-office">Laptop văn phòng</Link></li>
                  <li><Link to="/user/products?cat=laptop-gaming">Laptop gaming</Link></li>
                  <li><Link to="/user/products?cat=laptop-apple">MacBook</Link></li>
                  <li><Link to="/user/products?cat=laptop-graphic">Laptop đồ họa</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-slate-900">Điện thoại</h4>
                <ul className="space-y-1 text-slate-600">
                  <li><Link to="/user/products?cat=iphone">iPhone</Link></li>
                  <li><Link to="/user/products?cat=samsung">Samsung</Link></li>
                  <li><Link to="/user/products?cat=xiaomi">Xiaomi</Link></li>
                  <li><Link to="/user/products?cat=oppo">Oppo / Realme</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-slate-900">Phụ kiện</h4>
                <ul className="space-y-1 text-slate-600">
                  <li><Link to="/user/products?cat=mouse">Chuột & Bàn phím</Link></li>
                  <li><Link to="/user/products?cat=headphone">Tai nghe</Link></li>
                  <li><Link to="/user/products?cat=charging">Sạc / Cáp / Pin dự phòng</Link></li>
                  <li><Link to="/user/products?cat=usb">USB & Ổ cứng</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-slate-900">Thiết bị khác</h4>
                <ul className="space-y-1 text-slate-600">
                  <li><Link to="/user/products?cat=tablet">Máy tính bảng</Link></li>
                  <li><Link to="/user/products?cat=smartwatch">Đồng hồ thông minh</Link></li>
                  <li><Link to="/user/products?cat=monitor">Màn hình máy tính</Link></li>
                  <li><Link to="/user/products?cat=network">Thiết bị mạng</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <Link to="/user/about">Giới thiệu</Link>
          <Link to="/user/blog">Tin công nghệ</Link>
          <Link to="/user/contact">Liên hệ</Link>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            Chỉ đường
          </a>
        </div>
      </nav>
    </header>
  );
}
