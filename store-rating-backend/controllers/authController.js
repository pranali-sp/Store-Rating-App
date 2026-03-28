const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/db");

// ✅ REGISTER FUNCTION (ADD THIS)
exports.register = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (name, email, password, address) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, address],
      (err, result) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "User registered successfully" });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ LOGIN FUNCTION (YOUR CODE)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) return res.status(500).json({ error: err });

        if (result.length === 0) {
          return res.status(404).json({ msg: "User not found" });
        }

        const user = result[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(400).json({ msg: "Invalid password" });
        }

        const token = jwt.sign(
          { id: user.id, role: user.role },
          "SECRET_KEY",
          { expiresIn: "1d" }
        );

        res.json({
          message: "Login successful",
          token,
        });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};