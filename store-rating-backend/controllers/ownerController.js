const db = require("../config/db");

exports.getOwnerDashboard = (req, res) => {
  const ownerId = req.user.id;

  db.query(
    `SELECT stores.id AS store_id, stores.name,
     AVG(ratings.rating) AS avg_rating
     FROM stores
     LEFT JOIN ratings ON stores.id = ratings.store_id
     WHERE stores.owner_id = ?
     GROUP BY stores.id`,
    [ownerId],
    (err, storesResult) => {
      if (err) return res.status(500).json({ error: err });

      res.json(storesResult);
    }
  );
};