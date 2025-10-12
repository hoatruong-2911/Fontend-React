import React from "react";
import { Link } from "react-router-dom";
export default function ProductCard({ id, title, price, oldPrice, sale }){
  return (
    <Link className="card product" to={`/user/product/${id}`}>
      <div className="thumb" aria-hidden="true"></div>
      <div className="card-body">
        {sale && <div className="badge">- {sale}%</div>}
        <div className="title" style={{fontWeight:700, marginTop:6}}>{title}</div>
        <div><span className="price">{price}</span>{oldPrice && <span className="old-price">{oldPrice}</span>}</div>
      </div>
    </Link>
  );
}