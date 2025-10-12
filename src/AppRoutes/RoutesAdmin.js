import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

// ==== Pages ====

// Dashboard / Banner / User
import DashboardPage from "../pages/Admin/Dashboard";
import BannerListPage from "../pages/Admin/Banner/BannerListPage";
import UserListPage from "../pages/Admin/User/UserListPage";

// Products
import ProductListPage from "../pages/Admin/products/ProductListPage";
import AddProductPage from "../pages/Admin/products/AddProductPage";
import EditProductPage from "../pages/Admin/products/EditProductPage";

// Categories
import CategoryListPage from "../pages/Admin/categorys/CategoryListPage";
import AddCategoryPage from "../pages/Admin/categorys/AddCategoryPage";
import EditCategoryPage from "../pages/Admin/categorys/EditCategoryPage";

const RoutesAdmin = () => (
  <Routes>
    {/* Route cha dùng layout tổng thể */}
    <Route path="/" element={<AdminLayout />}>
      {/* Mặc định hiển thị Dashboard */}
      <Route index element={<Navigate replace to="admin/dashboard" />} />

      {/* Dashboard */}
      <Route path="admin/dashboard" element={<DashboardPage />} />

      {/* Products */}
      <Route path="admin/products">
        <Route index element={<ProductListPage />} />
        <Route path="add" element={<AddProductPage />} />
        <Route path=":id/edit" element={<EditProductPage />} />
      </Route>

      {/* Categories */}
      <Route path="admin/categories">
        <Route index element={<CategoryListPage />} />
        <Route path="add" element={<AddCategoryPage />} />
        <Route path=":id/edit" element={<EditCategoryPage />} />
      </Route>

      {/* Banner */}
      <Route path="admin/banner" element={<BannerListPage />} />

      {/* Users */}
      <Route path="admin/users" element={<UserListPage />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate replace to="admin/dashboard" />} />
    </Route>
  </Routes>
);

export default RoutesAdmin;