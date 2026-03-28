const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// ✅ Normal user route
router.get(
  "/profile",
  verifyToken,
  authorizeRoles("user", "admin", "owner"),
  (req, res) => {
    res.json({
      message: "User profile accessed",
      user: req.user,
    });
  }
);

// ✅ Admin only route
router.get(
  "/admin-dashboard",
  verifyToken,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin",
    });
  }
);

// ✅ Store owner route
router.get(
  "/owner-dashboard",
  verifyToken,
  authorizeRoles("owner"),
  (req, res) => {
    res.json({
      message: "Welcome Store Owner",
    });
  }
);

module.exports = router;