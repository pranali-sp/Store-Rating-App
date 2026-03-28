import React, { useEffect, useState } from "react";
import API from "../services/api";

const OwnerDashboard = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await API.get("/owner/dashboard");
    setStores(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📈 Owner Dashboard</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {stores.length === 0 ? (
          <p>No stores found</p>
        ) : (
          stores.map((store) => (
            <div key={store.store_id} style={cardStyle}>
              <h3>{store.name}</h3>

              <p>
                ⭐ Average Rating:{" "}
                {store.avg_rating ? store.avg_rating.toFixed(1) : "No ratings"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  width: "250px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

export default OwnerDashboard;
