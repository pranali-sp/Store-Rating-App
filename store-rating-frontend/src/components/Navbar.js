import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#2c3e50",
      color: "#fff"
    }}>
      <h2>Store Rating</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={{ color: "#fff" }} to="/user">User</Link>
        <Link style={{ color: "#fff" }} to="/admin">Admin</Link>
        <Link style={{ color: "#fff" }} to="/owner">Owner</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;