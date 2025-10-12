import React from "react";
import BlogCard from "../../../components/User/BlogCard";
import "../styles/BlogPage.css";

export default function BlogPage(){
  const posts = [
    {id:1,title:"Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản",excerpt:"Tự trồng rau trong thùng xốp tại nhà là lựa chọn của nhiều gia đình..."},
    {id:2,title:"Tự chế món thạch sữa chua thanh long lung linh sắc màu",excerpt:"Món ăn tráng miệng thanh mát, đẹp da..."},
    {id:3,title:"Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam",excerpt:"Nhiều loại quả hảo hạng, giá trị cao..."},
  ];
  return (
    <div>
      <div className="container section blog">
        <h1>Tin cập nhật</h1>
        <div className="grid grid-3">
          {posts.map(p => <BlogCard key={p.id} {...p} />)}
        </div>
      </div>
    </div>
  );
}