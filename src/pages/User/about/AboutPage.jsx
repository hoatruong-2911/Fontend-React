import React from "react";
import "../styles/AboutPage.css";

export default function AboutPage() {
  return (
    <div>
      <div className="container section about">
        <h1>Giới thiệu về TechZone</h1>
        <p>
          <strong>TechZone</strong> là cửa hàng chuyên cung cấp các sản phẩm
          điện tử chính hãng như laptop, điện thoại, máy tính bảng và phụ kiện
          công nghệ. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm
          chất lượng cao, giá cả hợp lý và dịch vụ hậu mãi tận tâm.
        </p>

        <div className="grid grid-3 mt-10">
          <div className="card kpi">
            <div className="card-body">
              <div className="num">98%</div>
              <div className="txt">Khách hàng hài lòng</div>
            </div>
          </div>

          <div className="card kpi">
            <div className="card-body">
              <div className="num">5000+</div>
              <div className="txt">Sản phẩm chính hãng</div>
            </div>
          </div>

          <div className="card kpi">
            <div className="card-body">
              <div className="num">10+</div>
              <div className="txt">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2>Tầm nhìn & Sứ mệnh</h2>
          <p>
            TechZone hướng đến việc trở thành hệ thống bán lẻ điện tử hàng đầu,
            giúp người tiêu dùng tiếp cận công nghệ tiên tiến dễ dàng và tiện
            lợi. Chúng tôi không chỉ bán sản phẩm — chúng tôi mang đến trải
            nghiệm mua sắm hiện đại, nhanh chóng và đáng tin cậy.
          </p>
        </div>
      </div>
    </div>
  );
}
