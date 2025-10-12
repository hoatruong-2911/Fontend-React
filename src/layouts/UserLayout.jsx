// src/layouts/UserLayout.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

/**
 * UserLayout
 * - Giao diện người dùng (Header + Navbar + Mega menu + Footer)
 * - Dùng TailwindCSS, tương thích với hệ thống route /user/*
 */

export default function UserLayout() {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-emerald-700 font-bold"
      : "hover:text-emerald-700";

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafb] text-slate-900">
      {/* Topbar */}
      <div className="w-full bg-emerald-700 text-white text-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between">
          <div className="opacity-95">
            Hotline: <span className="font-semibold">1900 8888</span> · TechZone Store — 123 Nguyễn Văn Linh, Hà Nội
          </div>
          <div className="space-x-2">
            <Link to="/user/login" className="hover:underline">Đăng nhập</Link>
            <span className="opacity-60">hoặc</span>
            <Link to="/user/register" className="hover:underline">Đăng ký</Link>
          </div>
        </div>
      </div>

      {/* Navbar + Mega menu */}
      <header className="bg-white sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center gap-4">
          {/* Logo */}
          <Link to="/user" className="shrink-0">
            <img src="/logo.png" alt="TechZone" className="h-10 w-auto object-contain" />
          </Link>

          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                className="w-full border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Tìm laptop, điện thoại, phụ kiện…"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">⌕</div>
            </div>
          </div>

          {/* Cart */}
          <Link
            to="/user/cart"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-600 bg-emerald-600 text-white px-4 py-2 font-semibold hover:opacity-95"
          >
            Giỏ hàng (0)
          </Link>
        </div>

        {/* Navigation menu */}
        <nav className="max-w-[1200px] mx-auto px-4 pb-3">
          <ul className="flex items-center gap-4 font-semibold text-slate-700">
            <li>
              <Link to="/user" className={`px-2 py-1 rounded ${isActive("/user")}`}>Trang chủ</Link>
            </li>

            {/* Mega menu */}
            <li className="relative group">
              <Link to="/user/products" className="px-2 py-1 rounded hover:bg-slate-100 inline-flex items-center gap-1">
                Sản phẩm <span className="opacity-60">▾</span>
              </Link>

              <div
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                           absolute left-0 top-full w-[900px] bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50"
              >
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {[
                    {
                      title: "Laptop",
                      items: [
                        ["Laptop văn phòng", "laptop-office"],
                        ["Laptop gaming", "laptop-gaming"],
                        ["MacBook", "laptop-apple"],
                        ["Laptop đồ họa", "laptop-graphic"],
                      ],
                    },
                    {
                      title: "Điện thoại",
                      items: [
                        ["iPhone", "iphone"],
                        ["Samsung Galaxy", "samsung"],
                        ["Xiaomi", "xiaomi"],
                        ["Oppo / Realme", "oppo"],
                      ],
                    },
                    {
                      title: "Phụ kiện",
                      items: [
                        ["Chuột & Bàn phím", "mouse-keyboard"],
                        ["Tai nghe", "headphone"],
                        ["Sạc / Cáp / Pin", "charging"],
                        ["USB & Ổ cứng", "storage"],
                      ],
                    },
                    {
                      title: "Thiết bị khác",
                      items: [
                        ["Máy tính bảng", "tablet"],
                        ["Đồng hồ thông minh", "smartwatch"],
                        ["Màn hình máy tính", "monitor"],
                        ["Thiết bị mạng", "network"],
                      ],
                    },
                  ].map((group) => (
                    <div key={group.title}>
                      <div className="font-bold text-slate-900 mb-2">{group.title}</div>
                      <ul className="space-y-1 text-slate-700">
                        {group.items.map(([label, cat]) => (
                          <li key={cat}>
                            <Link to={`/user/products?cat=${cat}`} className="hover:underline">
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link to="/user/about" className={`px-2 py-1 rounded ${isActive("/user/about")}`}>Giới thiệu</Link>
            </li>
            <li>
              <Link to="/user/blog" className={`px-2 py-1 rounded ${isActive("/user/blog")}`}>Tin công nghệ</Link>
            </li>
            <li>
              <Link to="/user/contact" className={`px-2 py-1 rounded ${isActive("/user/contact")}`}>Liên hệ</Link>
            </li>
            <li>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="px-2 py-1 rounded hover:bg-slate-100">
                Chỉ đường
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Nội dung các trang con */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 mt-10">
        <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Thông tin cửa hàng */}
          <div>
            <div className="flex items-center mb-3">
              <img src="/logo.png" alt="TechZone" className="h-10 w-auto mr-2" />
              <div className="text-white text-2xl font-black">TechZone</div>
            </div>
            <p className="text-slate-400">
              TechZone chuyên cung cấp laptop, điện thoại, linh kiện và phụ kiện công nghệ chính hãng với giá tốt.
            </p>
            <p className="mt-3 text-slate-400">Tòa nhà Ladeco, 266 Đội Cấn, Hà Nội — Hotline: 1900 8888</p>
            <p className="text-slate-400">Thứ 2 - Chủ nhật: 8:00 - 21:00</p>
          </div>

          {/* Hỗ trợ khách hàng */}
          <div>
            <div className="font-bold text-white mb-2">Hỗ trợ khách hàng</div>
            <ul className="space-y-1">
              <li><Link to="/user/contact" className="hover:underline">Liên hệ</Link></li>
              <li><Link to="/user/about" className="hover:underline">Về chúng tôi</Link></li>
              <li><Link to="/user/policy" className="hover:underline">Chính sách bảo hành</Link></li>
              <li><Link to="/user/shipping" className="hover:underline">Chính sách giao hàng</Link></li>
            </ul>
          </div>

          {/* Danh mục sản phẩm */}
          <div>
            <div className="font-bold text-white mb-2">Danh mục sản phẩm</div>
            <ul className="space-y-1">
              <li><Link to="/user/products?cat=laptop" className="hover:underline">Laptop</Link></li>
              <li><Link to="/user/products?cat=smartphone" className="hover:underline">Điện thoại</Link></li>
              <li><Link to="/user/products?cat=phu-kien" className="hover:underline">Phụ kiện</Link></li>
              <li><Link to="/user/products?cat=linh-kien" className="hover:underline">Linh kiện</Link></li>
            </ul>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="border-t border-white/10 text-center py-3 text-slate-400 text-sm">
          © {new Date().getFullYear()} TechZone — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
