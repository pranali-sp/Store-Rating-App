const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "No token provided" });
    }

    const decoded = jwt.verify(token, "SECRET_KEY");

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ msg: "Invalid token" });
  }
};