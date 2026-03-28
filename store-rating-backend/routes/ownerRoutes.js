const express = require("express");
const router = express.Router();

const { getOwnerDashboard } = require("../controllers/ownerController");
const { verifyToken } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// ✅ Owner only
router.get("/dashboard", verifyToken, authorizeRoles("admin", "owner"), getOwnerDashboard);

module.exports = router;