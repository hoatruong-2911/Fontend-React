import React from "react";
import "../styles/AuthPages.css";

export default function LoginPage(){
  return (
    <div>
      <div className="container section auth">
        <h1>Đăng nhập</h1>
        <div className="card form">
          <div className="card-body">
            <input placeholder="Email"/>
            <input placeholder="Mật khẩu" type="password"/>
            <button className="btn">Đăng nhập</button>
            <p>Chưa có tài khoản? <a href="/user/register">Đăng ký</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}