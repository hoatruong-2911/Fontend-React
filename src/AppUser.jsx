import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesUser from "./AppRoutes/RoutesUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppUser() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/*" element={<RoutesUser />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}
