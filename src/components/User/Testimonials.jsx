import React from "react";

export default function Testimonials() {
  const quotes = [
    {
      name: "Anh Minh – Kỹ sư phần mềm",
      text: "Mình mua MacBook M3 tại TechZone, giao hàng cực nhanh và nhân viên hỗ trợ cài đặt tận tình. Quá hài lòng!",
    },
    {
      name: "Chị Linh – Thiết kế đồ họa",
      text: "Laptop Asus OLED mua ở đây chạy mượt, màu sắc chuẩn. Hỗ trợ đổi trả rất chuyên nghiệp. Sẽ quay lại mua lần nữa!",
    },
    {
      name: "Anh Huy – Sinh viên IT",
      text: "Giá tốt, bảo hành chính hãng, nhân viên tư vấn rất có tâm. Mua điện thoại ở đây là quyết định đúng đắn!",
    },
  ];

  return (
    <div className="container section">
      <h2 className="section-title">Đánh giá từ khách hàng</h2>
      <div className="grid grid-3">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="card border border-slate-200 shadow-sm hover:shadow-md transition rounded-xl bg-white"
          >
            <div className="card-body p-6">
              <div className="font-bold text-lg text-emerald-700 mb-2">
                {q.name}
              </div>
              <div className="text-slate-600 leading-relaxed">{q.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
