import React from "react";
import "../styles/AboutPage.css";

export default function AboutPage(){
  return (
    <div>
      <div className="container section about">
        <h1>Giới thiệu</h1>
        <p>DuaLeo-X cung cấp thực phẩm sạch, an toàn cho sức khỏe. Cam kết chất lượng và nguồn gốc rõ ràng.</p>
        <div className="grid grid-3">
          {[1,2,3].map(i => (
            <div className="card kpi" key={i}>
              <div className="card-body">
                <div className="num">{i*25}%</div>
                <div className="txt">Khách hàng hài lòng</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}