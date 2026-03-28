import React, { useEffect, useState } from "react";
import API from "../services/api";
import StoreCard from "../components/StoreCard";

const UserDashboard = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const res = await API.get("/stores");
    setStores(res.data);
  };

  const handleRating = async (storeId, rating) => {
    if (!rating) return alert("Please select rating");

    await API.post("/ratings", {
      store_id: storeId,
      rating: Number(rating),
    });

    alert("Rating submitted");
    fetchStores();
  };

  return (
    <div>
      <h2>Stores</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} onRate={handleRating} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
