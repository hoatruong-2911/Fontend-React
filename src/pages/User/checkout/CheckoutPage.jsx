import React from "react";
import "../styles/CheckoutPage.css";

export default function CheckoutPage(){
  return (
    <div>
      <div className="container section checkout">
        <h1>Thanh toán</h1>
        <div className="grid grid-2">
          <form className="card form">
            <div className="card-body">
              <div className="grid grid-2">
                <input placeholder="Họ và tên"/>
                <input placeholder="Số điện thoại"/>
              </div>
              <input placeholder="Email"/>
              <input placeholder="Địa chỉ giao hàng"/>
              <select><option>Phương thức thanh toán</option></select>
            </div>
          </form>
          <div className="card order">
            <div className="card-body">
              <h3>Đơn hàng</h3>
              <div className="line"><span>Vải thiều loại to</span><span>80.000₫</span></div>
              <div className="line total"><span>Tổng</span><span>80.000₫</span></div>
              <button className="btn">Đặt hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}