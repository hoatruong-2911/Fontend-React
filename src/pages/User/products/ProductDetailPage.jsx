// src/pages/User/products/ProductDetailPage.jsx
import React from "react";
import "../styles/ProductDetailPage.css";

export default function ProductDetailPage() {
  return (
    <div>
      <div className="container section pd-wrap">
        {/* Gallery sản phẩm */}
        <div className="pd-gallery card">
          <img
            src="/images/laptop-acer.jpg"
            alt="Laptop Acer Aspire 7"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="pd-info">
          <h1>Laptop Acer Aspire 7 A715 – Ryzen 5 / 8GB / SSD 512GB</h1>

          <div className="pd-price">
            <span className="price text-emerald-600 font-bold text-2xl">
              16.490.000₫
            </span>
            <span className="old-price line-through text-slate-400 ml-3">
              18.990.000₫
            </span>
            <span className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              -13%
            </span>
          </div>

          <p className="pd-desc mt-3 text-slate-700 leading-relaxed">
            Acer Aspire 7 sở hữu hiệu năng mạnh mẽ với CPU AMD Ryzen 5 5625U,
            RAM 8GB và ổ SSD 512GB. Thiết kế gọn nhẹ, pin bền bỉ, phù hợp cho
            học tập, văn phòng và giải trí.
          </p>

          <div className="pd-actions mt-4 flex items-center gap-3">
            <input
              className="qty border border-slate-300 rounded px-3 py-1 w-16"
              type="number"
              min="1"
              defaultValue="1"
            />
            <button className="btn bg-emerald-600 text-white px-6 py-2 rounded hover:opacity-90">
              Thêm vào giỏ
            </button>
          </div>

          <ul className="pd-meta mt-5 space-y-1 text-slate-600">
            <li><strong>Mã sản phẩm:</strong> LAP001</li>
            <li><strong>Danh mục:</strong> Laptop</li>
            <li><strong>Tình trạng:</strong> Còn hàng</li>
            <li><strong>Bảo hành:</strong> 12 tháng chính hãng</li>
          </ul>

          <div className="mt-6 border-t border-slate-200 pt-4">
            <h3 className="font-semibold text-slate-900 mb-2">Thông số kỹ thuật:</h3>
            <table className="text-sm w-full">
              <tbody>
                <tr>
                  <td className="py-1 text-slate-500">CPU</td>
                  <td>AMD Ryzen 5 5625U (6 nhân, 12 luồng)</td>
                </tr>
                <tr>
                  <td className="py-1 text-slate-500">RAM</td>
                  <td>8GB DDR4 (nâng cấp tối đa 32GB)</td>
                </tr>
                <tr>
                  <td className="py-1 text-slate-500">Ổ cứng</td>
                  <td>SSD 512GB NVMe</td>
                </tr>
                <tr>
                  <td className="py-1 text-slate-500">Màn hình</td>
                  <td>15.6" Full HD (1920x1080), IPS</td>
                </tr>
                <tr>
                  <td className="py-1 text-slate-500">Card đồ họa</td>
                  <td>NVIDIA GTX 1650 4GB</td>
                </tr>
                <tr>
                  <td className="py-1 text-slate-500">Trọng lượng</td>
                  <td>2.1 kg</td>
                </tr>
                <tr>
                  <td className="py-1 text-slate-500">Hệ điều hành</td>
                  <td>Windows 11 Home</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
