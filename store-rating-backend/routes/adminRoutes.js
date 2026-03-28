const express = require("express");
const router = express.Router();

const { getDashboardStats } = require("../controllers/adminController");
const { verifyToken } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// ✅ Admin only
router.get("/dashboard", verifyToken, authorizeRoles("admin"), getDashboardStats);

module.exports = router;