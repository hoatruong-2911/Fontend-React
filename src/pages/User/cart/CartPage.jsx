import React from "react";
import "../styles/CartPage.css";

export default function CartPage(){
  return (
    <div>
      <div className="container section cart">
        <h1>Giỏ hàng</h1>
        <div className="grid grid-3 cart-grid">
          <div className="card cart-items">
            {[1,2].map(i => (
              <div className="row" key={i}>
                <div className="thumb"></div>
                <div className="title">Sản phẩm {i}</div>
                <input className="qty" type="number" defaultValue="1"/>
                <div className="price">250.000₫</div>
              </div>
            ))}
          </div>
          <div className="card cart-summary">
            <div className="card-body">
              <h3>Tổng cộng</h3>
              <div className="line"><span>Tạm tính</span><span>500.000₫</span></div>
              <div className="line"><span>Vận chuyển</span><span>30.000₫</span></div>
              <div className="line total"><span>Thành tiền</span><span>530.000₫</span></div>
              <a className="btn" href="/user/checkout">Thanh toán</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}