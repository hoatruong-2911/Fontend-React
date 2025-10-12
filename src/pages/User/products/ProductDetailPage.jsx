import React from "react";
import "../styles/ProductDetailPage.css";

export default function ProductDetailPage(){
  return (
    <div>
      <div className="container section pd-wrap">
        <div className="pd-gallery card"></div>
        <div className="pd-info">
          <h1>Vải thiều loại to</h1>
          <div className="pd-price"><span className="price">80.000₫</span></div>
          <p className="pd-desc">Trái cây tươi ngon, an toàn cho sức khỏe.</p>
          <div className="pd-actions">
            <input className="qty" type="number" min="1" defaultValue="1" />
            <button className="btn">Thêm vào giỏ</button>
          </div>
          <ul className="pd-meta">
            <li>Mã: SP001</li>
            <li>Danh mục: Hoa quả</li>
            <li>Tồn kho: Còn hàng</li>
          </ul>
        </div>
      </div>
    </div>
  );
}