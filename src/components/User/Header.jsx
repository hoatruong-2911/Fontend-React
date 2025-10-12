import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="header">
      <div className="topbar">
        <div className="container">
          <div>Hotline: <strong>1900 6750</strong> · Ladeco Building, 266 Đội Cấn, Hà Nội</div>
          <div>
            <Link to="/user/login" style={{color:"#fff"}}>Đăng nhập</Link>
            <span style={{opacity:.6, padding: "0 6px"}}>hoặc</span>
            <Link to="/user/register" style={{color:"#fff"}}>Đăng ký</Link>
          </div>
        </div>
      </div>
      <nav className="nav">
        <div className="container">
          <Link className="brand" to="/user">
            <img
              src="/logo.png"
              alt="DuaLeo-X"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="search"><input placeholder="Tìm sản phẩm, danh mục..." /></div>
          <Link to="/user/cart" className="btn">Giỏ hàng (0)</Link>
        </div>
        <div className="container" style={{paddingTop:8}}>
          <div className="nav-links">
            <Link to="/user">Trang chủ</Link>
            <div className="mega">
              <Link to="/user/products">Sản phẩm ▾</Link>
              <div className="mega-panel">
                <div>
                  <h4>Rau củ</h4>
                  <ul>
                    <li><Link to="/user/products?cat=rau-tuoi">Rau tươi</Link></li>
                    <li><Link to="/user/products?cat=rau-vuon">Rau vườn</Link></li>
                    <li><Link to="/user/products?cat=rau-sach">Rau sạch</Link></li>
                    <li><Link to="/user/products?cat=cu-nhap-khau">Củ nhập khẩu</Link></li>
                  </ul>
                </div>
                <div>
                  <h4>Hoa quả</h4>
                  <ul>
                    <li><Link to="/user/products?cat=trai-cay-tuoi">Trái cây tươi</Link></li>
                    <li><Link to="/user/products?cat=hoa-qua-sach">Hoa quả sạch</Link></li>
                    <li><Link to="/user/products?cat=hoa-qua-nhap">Hoa quả nhập khẩu</Link></li>
                  </ul>
                </div>
                <div>
                  <h4>Thịt</h4>
                  <ul>
                    <li><Link to="/user/products?cat=thit-ga">Thịt gà</Link></li>
                    <li><Link to="/user/products?cat=thit-lon">Thịt lợn</Link></li>
                    <li><Link to="/user/products?cat=thit-bo">Thịt bò</Link></li>
                    <li><Link to="/user/products?cat=thit-vit">Thịt vịt</Link></li>
                  </ul>
                </div>
                <div>
                  <h4>Hải sản</h4>
                  <ul>
                    <li><Link to="/user/products?cat=ngao">Ngao</Link></li>
                    <li><Link to="/user/products?cat=so-huyet">Sò huyết</Link></li>
                    <li><Link to="/user/products?cat=cua">Cua</Link></li>
                    <li><Link to="/user/products?cat=tom">Tôm</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <Link to="/user/about">Giới thiệu</Link>
            <Link to="/user/blog">Tin tức</Link>
            <Link to="/user/contact">Liên hệ</Link>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">Chỉ đường</a>
          </div>
        </div>
      </nav>
    </header>
  );
}