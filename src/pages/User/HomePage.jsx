import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/User/ProductCard";
import CategoryTabs from "../../components/User/CategoryTabs";
import BrandStrip from "../../components/User/BrandStrip";
import Testimonials from "../../components/User/Testimonials";
import BlogCard from "../../components/User/BlogCard";
import "./styles/HomePage.css";

export default function HomePage() {
  const products = [
    { id: 1, title: "Vải thiều loại to", price: "80.000₫" },
    { id: 2, title: "Hồng đỏ Mỹ", price: "150.000₫" },
    { id: 3, title: "Dưa leo Đà Lạt", price: "65.000₫" },
    { id: 4, title: "Cà chua Đà Lạt", price: "30.000₫", oldPrice: "45.000₫", sale: 33 },
    { id: 5, title: "Nho đỏ không hạt ÚC", price: "30.000₫", oldPrice: "45.000₫", sale: 33 },
    { id: 6, title: "Dâu tây loại 1", price: "250.000₫", oldPrice: "320.000₫", sale: 22 },
    { id: 7, title: "Quả Kiwi xanh", price: "250.000₫" },
    { id: 8, title: "Chanh Dây đỏ Úc", price: "400.000₫", oldPrice: "460.000₫", sale: 13 },
  ];

  const posts = [
    {
      id: 1,
      title: "Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản",
      excerpt: "Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia đình...",
    },
    {
      id: 2,
      title: "Tự chế món thạch sữa chua thanh long lung linh sắc màu",
      excerpt: "Thạch sữa chua thanh long là món ăn tráng miệng tuyệt vời...",
    },
    {
      id: 3,
      title: "Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam",
      excerpt: "Nhật Bản là đất nước có nhiều loại hoa quả chất lượng...",
    },
  ];

  return (
    <div>
      {/* Banner / Hero */}
      <section className="hero section">
        <div className="container hero-wrap">
          <div className="hero-text">
            <h1>DuaLeo-X - Thực phẩm sạch an toàn</h1>
            <p>Chúng tôi chuyên cung cấp các sản phẩm an toàn cho sức khỏe.</p>
            <Link className="btn" to="/user/products">Mua ngay</Link>
          </div>
          <div className="hero-banner" aria-hidden="true"></div>
        </div>
      </section>

      {/* Danh mục */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Danh mục</h2>
          <div className="grid grid-4">
            {["Rau sạch", "Thịt tươi", "Hải sản tươi", "Hoa quả tươi"].map((t, i) => (
              <div key={i} className="card cat">
                <div className="thumb" aria-hidden="true"></div>
                <div className="card-body" style={{ fontWeight: 800 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trái cây mỗi ngày */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Trái cây mỗi ngày</h2>
            <CategoryTabs
              tabs={[
                { label: "Rau củ", value: "rau-cu" },
                { label: "Hoa quả", value: "hoa-qua" },
                { label: "Thịt", value: "thit" },
                { label: "Hải sản", value: "hai-san" },
              ]}
              onTab={() => {}}
            />
          </div>
          <div className="grid grid-4">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Rau tươi mới */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Rau tươi mới</h2>
            <CategoryTabs
              tabs={[
                { label: "Rau củ", value: "rau-cu" },
                { label: "Hoa quả", value: "hoa-qua" },
                { label: "Thịt", value: "thit" },
                { label: "Hải sản", value: "hai-san" },
              ]}
              onTab={() => {}}
            />
          </div>
          <div className="grid grid-4">
            {products
              .concat([{ id: 9, title: "Nho Đà Lạt", price: "400.000₫" }])
              .map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
          </div>
        </div>
      </section>

      {/* Thực phẩm khô */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Thực phẩm khô</h2>
            <CategoryTabs
              tabs={[
                { label: "Rau củ", value: "rau-cu" },
                { label: "Hoa quả", value: "hoa-qua" },
                { label: "Thịt", value: "thit" },
                { label: "Hải sản", value: "hai-san" },
              ]}
              onTab={() => {}}
            />
          </div>
          <div className="grid grid-4">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Tin cập nhật */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tin cập nhật</h2>
          <p className="muted">Tin tức vệ sinh an toàn thực phẩm cập nhật mới nhất mỗi ngày cho bạn</p>
          <div className="grid grid-3">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <BrandStrip />
    </div>
  );
}
