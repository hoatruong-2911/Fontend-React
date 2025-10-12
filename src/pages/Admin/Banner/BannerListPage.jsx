import React from "react";

export default function BannerListPage() {
  const data = [
    {
      id: 1,
      title: "Sale Laptop 50%",
      image: "https://dummyimage.com/280x100/e5e7eb/111&text=Banner+1",
      status: "Hiển thị",
    },
    {
      id: 2,
      title: "Điện thoại mới",
      image: "https://dummyimage.com/280x100/e5e7eb/111&text=Banner+2",
      status: "Ẩn",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Quản lý Banner</h2>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded px-4 py-2">
          + Thêm mới
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-4 py-3">ID</th>
              <th className="text-left px-4 py-3">Ảnh</th>
              <th className="text-left px-4 py-3">Tiêu đề</th>
              <th className="text-left px-4 py-3">Trạng thái</th>
              <th className="text-right px-4 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="px-4 py-3">{b.id}</td>
                <td className="px-4 py-3">
                  <img src={b.image} alt={b.title} className="h-14 rounded" />
                </td>
                <td className="px-4 py-3 font-medium">{b.title}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      b.status === "Hiển thị"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
                    Sửa
                  </button>
                  <button className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600">
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan="5">
                  Chưa có banner nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
