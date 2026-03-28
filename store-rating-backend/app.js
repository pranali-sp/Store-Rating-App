const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ IMPORT ROUTE
const authRoutes = require("./routes/authRoutes");

// ✅ USE ROUTE
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});


const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const storeRoutes = require("./routes/storeRoutes");

app.use("/api/stores", storeRoutes);

const ratingRoutes = require("./routes/ratingRoutes");

app.use("/api/ratings", ratingRoutes);

const adminRoutes = require("./routes/adminRoutes");

app.use("/api/admin", adminRoutes);

const ownerRoutes = require("./routes/ownerRoutes");

app.use("/api/owner", ownerRoutes);

module.exports = app;