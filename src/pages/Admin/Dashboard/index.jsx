import React from "react";

export default function DashboardPage() {
  const stats = [
    { label: "Sản phẩm", value: 128, note: "đang bán" },
    { label: "Danh mục", value: 12, note: "đã tạo" },
    { label: "Đơn hàng", value: 56, note: "tuần này" },
    { label: "Người dùng", value: 432, note: "đã đăng ký" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Tổng quan</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-lg shadow-sm border p-4 flex flex-col"
          >
            <div className="text-gray-500">{s.label}</div>
            <div className="text-3xl font-extrabold mt-1">{s.value}</div>
            <div className="text-sm text-gray-400 mt-2">{s.note}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4 xl:col-span-2">
          <div className="font-semibold mb-2">Hoạt động gần đây</div>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Admin cập nhật tồn kho cho “iPhone 15 Pro Max”.</li>
            <li>Thêm danh mục “Tai nghe / Âm thanh”.</li>
            <li>Người dùng mới đăng ký: nguyenanh@example.com.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="font-semibold mb-2">Ghi chú nhanh</div>
          <textarea
            className="w-full border rounded p-2 text-sm outline-none focus:ring"
            rows={7}
            placeholder="Nhập ghi chú công việc…"
          />
        </div>
      </div>
    </div>
  );
}
