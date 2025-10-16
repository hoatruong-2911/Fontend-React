import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AuthLayout from "../layouts/AuthLayout";

import HomePage from "../pages/User/HomePage";
import ProductListPage from "../pages/User/products/ProductListPage";
import ProductDetailPage from "../pages/User/products/ProductDetailPage";
import CartPage from "../pages/User/cart/CartPage";
import CheckoutPage from "../pages/User/checkout/CheckoutPage";
import BlogPage from "../pages/User/blog/BlogPage";
import ContactPage from "../pages/User/contact/ContactPage";
import AboutPage from "../pages/User/about/AboutPage";
import LoginPage from "../pages/User/auth/LoginPage";
import RegisterPage from "../pages/User/auth/RegisterPage";

export default function RoutesUser() {
  return (
    <Routes>
      {/* NHÁNH 1: layout có Header/Footer */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      {/* NHÁNH 2: layout trống cho login/register (dùng đường dẫn tuyệt đối) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* fallback: đẩy về "/" thay vì "/user" */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
