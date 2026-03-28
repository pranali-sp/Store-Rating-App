import React, { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const res = await API.get("/admin/dashboard");
    setStats(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Admin Dashboard</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Users */}
        <div style={cardStyle("#3498db")}>
          <h3>Total Users</h3>
          <h1>{stats.totalUsers || 0}</h1>
        </div>

        {/* Stores */}
        <div style={cardStyle("#2ecc71")}>
          <h3>Total Stores</h3>
          <h1>{stats.totalStores || 0}</h1>
        </div>

        {/* Ratings */}
        <div style={cardStyle("#e67e22")}>
          <h3>Total Ratings</h3>
          <h1>{stats.totalRatings || 0}</h1>
        </div>
      </div>
    </div>
  );
};

// reusable card style
const cardStyle = (color) => ({
  background: color,
  color: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
});

export default AdminDashboard;
