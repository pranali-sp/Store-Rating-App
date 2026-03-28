import React, { useState } from "react";

const StoreCard = ({ store, onRate }) => {
  const [rating, setRating] = useState("");

  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      width: "260px",
      margin: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <h3>{store.name}</h3>

      <p>{store.address}</p>

      <p>
        ⭐ {store.avg_rating ? parseFloat(store.avg_rating).toFixed(0) : "No ratings"}
      </p>

      <select onChange={(e) => setRating(e.target.value)}>
        <option value="">Rate</option>
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐</option>
        <option value="3">3 ⭐</option>
        <option value="4">4 ⭐</option>
        <option value="5">5 ⭐</option>
      </select>

      <button
        style={{
          marginTop: "10px",
          width: "100%",
          background: "#3498db",
          color: "#fff",
          border: "none",
          padding: "8px",
          borderRadius: "5px"
        }}
        onClick={() => onRate(store.id, rating)}
      >
        Submit
      </button>
    </div>
  );
};

export default StoreCard;