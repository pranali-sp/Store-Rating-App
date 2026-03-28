const db = require("../config/db");

// ✅ Add Store (Admin only)
exports.addStore = (req, res) => {
  const { name, email, address, owner_id } = req.body;

  db.query(
    "INSERT INTO stores (name, email, address, owner_id) VALUES (?, ?, ?, ?)",
    [name, email, address, owner_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      res.json({ message: "Store added successfully" });
    }
  );
};

// ✅ Get All Stores
exports.getStores = (req, res) => {
  const search = req.query.search || "";

  db.query(
    `SELECT stores.*, AVG(ratings.rating) AS avg_rating
     FROM stores
     LEFT JOIN ratings ON stores.id = ratings.store_id
     WHERE stores.name LIKE ? OR stores.address LIKE ?
     GROUP BY stores.id`,
    [`%${search}%`, `%${search}%`],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      res.json(result);
    }
  );
};