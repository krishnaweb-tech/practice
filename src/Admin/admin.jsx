import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Dashboard from "./Dashboard.jsx";
import Users from "./Users.jsx";
import Results from "./Result.jsx";
import "./Admin.css";
 
export default function Admin({ setPage: setAppPage }) {
  const [page, setPage] = useState("dashboard");
 
  return (
    <div className="admin-container">
      <Sidebar setPage={setPage} currentPage={page} />
      <div className="admin-content">
        {page === "dashboard" && <Dashboard />}
        {page === "users" && <Users />}
        {page === "results" && <Results />}
      </div>
    </div>
  );
}
 
