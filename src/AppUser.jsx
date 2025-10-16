import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoutesUser from "./AppRoutes/RoutesUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppUser() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect naked root to /user */}
        <Route path="/" element={<Navigate to="/user" replace />} />

        {/* Mount whole user app under /user */}
        <Route path="/user/*" element={<RoutesUser />} />

        {/* Fallback: anything else also goes to /user */}
        <Route path="*" element={<Navigate to="/user" replace />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}
