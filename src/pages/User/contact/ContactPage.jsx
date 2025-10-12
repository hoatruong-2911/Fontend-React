import React from "react";

import "../styles/ContactPage.css";

export default function ContactPage(){
  return (
    <div>
      <div className="container section contact">
        <h1>Liên hệ</h1>
        <div className="grid grid-2">
          <form className="card form">
            <div className="card-body">
              <input placeholder="Họ và tên"/>
              <input placeholder="Email"/>
              <textarea placeholder="Nội dung" rows={6}></textarea>
              <button className="btn">Gửi</button>
            </div>
          </form>
          <div className="card info">
            <div className="card-body">
              <h3>Thông tin</h3>
              <p>Hotline: 1900 6750</p>
              <p>Địa chỉ: Ladeco Building, 266 Đội Cấn, Hà Nội</p>
              <p>Giờ làm việc: T2 - CN: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}