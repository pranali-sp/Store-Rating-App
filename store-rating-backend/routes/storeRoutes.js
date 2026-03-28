const express = require("express");
const router = express.Router();

const { addStore, getStores } = require("../controllers/storeController");
const { verifyToken } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// ✅ Admin can add store
router.post("/add", verifyToken, authorizeRoles("admin"), addStore);

// ✅ All users can view stores
router.get("/", verifyToken, getStores);

module.exports = router;