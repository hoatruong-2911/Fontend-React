import React from "react";
import ProductCard from "../../../components/User/ProductCard";
import "../styles/ProductListPage.css";

export default function ProductListPage(){
  const products = Array.from({length:12}).map((_,i)=>({id:i+1,title:`Sản phẩm ${i+1}`,price:`${150+i*5}.000₫`}));
  return (
    <div>
      <div className="container section">
        <div className="pl-head">
          <h1>Danh sách sản phẩm</h1>
          <div className="filters">
            <select><option>Tất cả danh mục</option></select>
            <select><option>Sắp xếp</option></select>
          </div>
        </div>
        <div className="grid grid-4">
          {products.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
        <div className="pagination">
          <button className="btn outline">← Trước</button>
          <button className="btn">Sau →</button>
        </div>
      </div>
    </div>
  );
}