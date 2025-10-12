import React from "react";
export default function Testimonials(){
  const quotes = [
    {name:"Người mẫu - Ngọc Trinh", text:"Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất. Và đây là nơi tôi đặt trọng niềm tin"},
    {name:"Diễn viên - Phương Trinh", text:"Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất. Và đây là nơi tôi đặt trọng niềm tin"},
    {name:"Ca sĩ - Hoàng Yến", text:"Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất. Và đây là nơi tôi đặt trọng niềm tin"},
  ];
  return (
    <div className="container section">
      <h2 className="section-title">Phản hồi của khách</h2>
      <div className="grid grid-3">
        {quotes.map((q,i)=>(
          <div key={i} className="card"><div className="card-body">
            <div style={{fontWeight:800, marginBottom:6}}>{q.name}</div>
            <div style={{color:"#475569"}}>{q.text}</div>
          </div></div>
        ))}
      </div>
    </div>
  );
}