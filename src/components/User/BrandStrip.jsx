import React from "react";
export default function BrandStrip(){
  const items = ["Trái cây","Rau tươi","Thực phẩm khô","Tin tức"];
  return (
    <div className="container section">
      <div className="grid grid-4">
        {items.map((t,i)=>(
          <div key={i} className="card" style={{padding:16,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800}}>{t}</div>
        ))}
      </div>
    </div>
  );
}