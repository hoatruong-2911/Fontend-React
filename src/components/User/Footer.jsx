import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <div className="brand">DuaLeo-X</div>
          <p>Chúng tôi chuyên cung cấp các sản phẩm thực phẩm sạch an toàn cho sức khỏe con người</p>
          <p>Ladeco Building, 266 Đội Cấn, Hà Nội — 1900 6750</p>
          <p>Thứ 2 - Chủ nhật: 9:00 - 18:00</p>
        </div>
        <div>
          <h4>Hỗ trợ</h4>
          <ul>
            <li><Link to="/user/contact">Liên hệ</Link></li>
            <li><Link to="/user/about">Về chúng tôi</Link></li>
          </ul>
        </div>
        <div>
          <h4>Danh mục</h4>
          <ul>
            <li><Link to="/user/products?cat=rau-sach">Rau sạch</Link></li>
            <li><Link to="/user/products?cat=hoa-qua">Hoa quả</Link></li>
            <li><Link to="/user/products?cat=thit">Thịt</Link></li>
            <li><Link to="/user/products?cat=hai-san">Hải sản</Link></li>
          </ul>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} DuaLeo-X</div>
    </footer>
  );
}