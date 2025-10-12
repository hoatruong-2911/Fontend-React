import React from "react";
import BlogCard from "../../../components/User/BlogCard";
import "../styles/BlogPage.css";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Top 5 laptop mỏng nhẹ tốt nhất năm 2025 cho dân văn phòng",
      excerpt:
        "Những mẫu laptop vừa hiệu năng mạnh, vừa thiết kế sang trọng, thời lượng pin ấn tượng — hoàn hảo cho công việc di động.",
    },
    {
      id: 2,
      title: "So sánh iPhone 16 Pro và Samsung Galaxy S25 Ultra",
      excerpt:
        "Hai siêu phẩm flagship mới nhất của Apple và Samsung có gì khác biệt? Cùng xem đâu là lựa chọn đáng tiền hơn.",
    },
    {
      id: 3,
      title: "Tai nghe chống ồn tốt nhất tầm giá 2 triệu đồng",
      excerpt:
        "Không cần chi quá nhiều tiền, bạn vẫn có thể sở hữu tai nghe chống ồn với chất âm tốt và thời lượng pin ấn tượng.",
    },
  ];

  return (
    <div>
      <div className="container section blog">
        <h1>Tin tức công nghệ</h1>
        <p className="muted">
          Cập nhật xu hướng mới nhất về laptop, điện thoại và phụ kiện công nghệ.
        </p>
        <div className="grid grid-3">
          {posts.map((p) => (
            <BlogCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
