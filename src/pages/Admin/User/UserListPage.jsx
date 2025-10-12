import React from "react";

export default function UserListPage() {
  const users = [
    { id: 1, name: "Nguyễn An", email: "anan@example.com", role: "admin", status: "active" },
    { id: 2, name: "Trần Bình", email: "binhtran@example.com", role: "user", status: "blocked" },
    { id: 3, name: "Lê Chi", email: "chile@example.com", role: "user", status: "active" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Người dùng</h2>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded px-4 py-2">
          + Tạo người dùng
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-4 py-3">ID</th>
              <th className="text-left px-4 py-3">Họ tên</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Quyền</th>
              <th className="text-left px-4 py-3">Trạng thái</th>
              <th className="text-right px-4 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="px-4 py-3">{u.id}</td>
                <td className="px-4 py-3 font-medium">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3 capitalize">{u.role}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      u.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {u.status === "active" ? "Hoạt động" : "Khóa"}
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
            {users.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan="6">
                  Chưa có người dùng.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
