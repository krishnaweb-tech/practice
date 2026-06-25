import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Users() {

  // LocalStorage 
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  // Search text track 
  const [search, setSearch] = useState("");

  // ─── Delete User ───────────────────────────────
  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  // ─── Search Filter ─────────────────────────────
  const filtered = users.filter((user) => {
    const name = user.firstName?.toLowerCase() || "";
    const email = user.email?.toLowerCase() || "";
    const keyword = search.toLowerCase();
    return name.includes(keyword) || email.includes(keyword);
  });

  // ─── UI ────────────────────────────────────────
  return (
    <div className="users-wrapper">

      {/* Heading */}
      <div className="users-header">
        <div>
          <h2 className="users-title">User List</h2>
          <p className="users-subtitle">Manage and view all users in the system</p>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="table-card">
        <table className="users-table">

          {/* Table Header */}
          <thead>
            <tr>
              <th>PROFILE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>CREATED DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>

            {/* No users found */}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="no-users">
                  No users found.
                </td>
              </tr>
            )}

            {/* Users list */}
            {filtered.length > 0 && filtered.map((user, index) => (
              <tr key={index}>

                {/* Profile Icon */}
                <td>
                  <AccountCircleIcon style={{ fontSize: 44, color: "#b0bec5" }} />
                </td>

                {/* Name */}
                <td className="user-name">{user.firstName}</td>

                {/* Email */}
                <td className="user-email">{user.email}</td>

                {/* Date */}
                <td>{new Date().toLocaleDateString("en-GB")}</td>

                {/* Action Buttons */}
                <td>
                  <button className="action-btn view-btn">
                    <VisibilityIcon style={{ fontSize: 20 }} />
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() => deleteUser(index)}
                  >
                    <DeleteIcon style={{ fontSize: 20 }} />
                  </button>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  );
}