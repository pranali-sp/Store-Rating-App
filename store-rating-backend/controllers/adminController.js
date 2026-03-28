const db = require("../config/db");

exports.getDashboardStats = (req, res) => {
  const stats = {};

  db.query("SELECT COUNT(*) AS totalUsers FROM users", (err, usersResult) => {
    if (err) return res.status(500).json({ error: err });

    stats.totalUsers = usersResult[0].totalUsers;

    db.query("SELECT COUNT(*) AS totalStores FROM stores", (err, storeResult) => {
      if (err) return res.status(500).json({ error: err });

      stats.totalStores = storeResult[0].totalStores;

      db.query("SELECT COUNT(*) AS totalRatings FROM ratings", (err, ratingResult) => {
        if (err) return res.status(500).json({ error: err });

        stats.totalRatings = ratingResult[0].totalRatings;

        res.json(stats);
      });
    });
  });
};