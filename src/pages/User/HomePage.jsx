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
    { id: 1, title: "Laptop Dell Inspiron 15", price: "18.990.000₫", oldPrice: "20.990.000₫", sale: 10 },
    { id: 2, title: "MacBook Air M2 13-inch", price: "29.990.000₫", oldPrice: "32.990.000₫", sale: 9 },
    { id: 3, title: "iPhone 15 Pro Max 256GB", price: "34.990.000₫" },
    { id: 4, title: "Tai nghe AirPods Pro 2", price: "5.990.000₫", oldPrice: "6.990.000₫", sale: 14 },
    { id: 5, title: "Chuột Logitech MX Master 3S", price: "2.490.000₫" },
    { id: 6, title: "Màn hình LG UltraWide 34”", price: "12.990.000₫", oldPrice: "14.990.000₫", sale: 13 },
    { id: 7, title: "Bàn phím cơ Keychron K6", price: "2.190.000₫" },
    { id: 8, title: "Loa Bluetooth JBL Charge 5", price: "4.490.000₫", oldPrice: "5.290.000₫", sale: 15 },
  ];

  const posts = [
     {
    id: 1,
    title: "Top 5 laptop văn phòng tốt nhất năm 2025",
    excerpt: "Cùng điểm qua 5 mẫu laptop được ưa chuộng nhất năm 2025 với hiệu năng mạnh mẽ, pin lâu và thiết kế hiện đại...",
    },
    {
      id: 2,
      title: "So sánh iPhone 15 Pro Max và Samsung Galaxy S24 Ultra",
      excerpt: "Hai flagship mạnh mẽ nhất hiện nay: Ai sẽ chiến thắng trong cuộc đua hiệu năng, camera và pin?...",
    },
    {
      id: 3,
      title: "Mẹo tối ưu hiệu suất máy tính Windows 11",
      excerpt: "Hướng dẫn cách tăng tốc máy tính, dọn dẹp bộ nhớ và tối ưu hiệu năng chỉ với vài thao tác đơn giản...",
    },
  ];

  return (
    <div>
      {/* Banner / Hero */}
      <section className="hero section">
        <div className="container hero-wrap">
          <div className="hero-text">
            <h1>TechZone — Thiết bị công nghệ chính hãng</h1>
            <p>Nơi bạn tìm thấy laptop, điện thoại và phụ kiện với giá tốt, bảo hành uy tín.</p>
            <div className="flex gap-2 mt-2">
              <Link className="btn" to="/user/products?cat=laptop">Mua Laptop</Link>
              <Link className="btn" to="/user/products?cat=smartphone">Mua Điện thoại</Link>
            </div>
          </div>
          <div className="hero-banner" aria-hidden="true"></div>
        </div>
      </section>


      {/* Danh mục */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Danh mục</h2>
          <div className="grid grid-4">
            {["Laptop", "Điện thoại", "Máy tính bảng", "Phụ kiện công nghệ"].map((t, i) => (
              <div key={i} className="card cat">
                <div className="thumb" aria-hidden="true"></div>
                <div className="card-body" style={{ fontWeight: 800 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <CategoryTabs
              tabs={[
                { label: "Laptop", value: "laptop" },
                { label: "Điện thoại", value: "smartphone" },
                { label: "Phụ kiện", value: "phu-kien" },
                { label: "Linh kiện", value: "linh-kien" },
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


      {/* Laptop mới nhất */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Laptop mới nhất</h2>
            <CategoryTabs
              tabs={[
                { label: "Laptop văn phòng", value: "laptop-van-phong" },
                { label: "Gaming", value: "gaming" },
                { label: "MacBook", value: "macbook" },
                { label: "Workstation", value: "workstation" },
              ]}
              onTab={() => {}}
            />
          </div>
          <div className="grid grid-4">
            {products
              .concat([{ id: 9, title: "Asus ZenBook 14 OLED", price: "23.990.000₫" }])
              .map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
          </div>
        </div>
      </section>

      {/* Phụ kiện công nghệ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Phụ kiện công nghệ</h2>
            <CategoryTabs
              tabs={[
                { label: "Chuột & Bàn phím", value: "phu-kien" },
                { label: "Tai nghe", value: "tai-nghe" },
                { label: "Màn hình", value: "man-hinh" },
                { label: "Thiết bị lưu trữ", value: "luu-tru" },
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
          <h2 className="section-title">Tin tức công nghệ</h2>
          <p className="muted">
            Cập nhật xu hướng mới nhất về laptop, smartphone và thiết bị công nghệ.
          </p>
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
