const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ROUTES       /api/auth/register
// DESC         Register a new user
// ACCESS       PUBLIC
exports.register = async (req, res) => {
  const { name, username, email } = req.body;
  const address = req.body.address ? req.body.address : "";
  const phoneNumber = req.body.phone_number ? req.body.phone_number : "";
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const { rows } = await db.query(
      `INSERT INTO "user"(name, username, email, password, address, phone_number)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;`,
      [name, username, email, password, address, phoneNumber]
    );
    const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(201).json({
      status: "success",
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @ROUTES       /api/auth/login
// @DESC         Login an existing user
// @ACCESS       PUBLIC
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { rows } = await db.query(`SELECT * from "user" WHERE email = $1`, [
      email,
    ]);
    const user = rows[0];
    if (!user) {
      return res.status(400).json({ error: `Invalid credential` });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ error: `Invalid credential` });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(201).json({
      status: "success",
      data: token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
