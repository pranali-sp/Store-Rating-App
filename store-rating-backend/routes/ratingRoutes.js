const express = require("express");
const router = express.Router();

const { addRating } = require("../controllers/ratingController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken, addRating);

module.exports = router;