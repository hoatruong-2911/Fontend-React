import React from "react";
import "../styles/AuthPages.css";

export default function RegisterPage(){
  return (
    <div>
      <div className="container section auth">
        <h1>Đăng ký</h1>
        <div className="card form">
          <div className="card-body">
            <div className="grid grid-2">
              <input placeholder="Họ và tên"/>
              <input placeholder="Số điện thoại"/>
            </div>
            <input placeholder="Email"/>
            <input placeholder="Mật khẩu" type="password"/>
            <button className="btn">Tạo tài khoản</button>
            <p>Đã có tài khoản? <a href="/user/login">Đăng nhập</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}