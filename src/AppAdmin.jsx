import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesAdmin from "./AppRoutes/RoutesAdmin";

export default function AppAdmin() {
  return (
    <BrowserRouter>
      <RoutesAdmin />
    </BrowserRouter>
  );
}
