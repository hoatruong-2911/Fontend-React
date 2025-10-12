import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppUser from "./AppUser";
import AppAdmin from "./AppAdmin";

const root = ReactDOM.createRoot(document.getElementById("root"));
const mode = process.env.REACT_APP_MODE || "user";
root.render(<React.StrictMode>{mode === "admin" ? <AppAdmin/> : <AppUser/>}</React.StrictMode>);
