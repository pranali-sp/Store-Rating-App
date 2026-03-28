const db = require("../config/db");

// ✅ Add or Update Rating
exports.addRating = (req, res) => {
  const { store_id, rating } = req.body;
  const user_id = req.user.id;

  db.query(
    `INSERT INTO ratings (user_id, store_id, rating)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE rating=?`,
    [user_id, store_id, rating, rating],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      res.json({ message: "Rating submitted successfully" });
    }
  );
};