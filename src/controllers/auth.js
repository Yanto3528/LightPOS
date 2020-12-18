const db = require("../db");

// ROUTES       /api/auth/register
// DESC         Register a new user
// ACCESS       PUBLIC
exports.register = async (req, res) => {
  const { name, username, email, password } = req.body;
  const address = req.body.address ? req.body.address : "";
  const phoneNumber = req.body.phone_number ? req.body.phone_number : "";
  try {
    const { rows } = await db.query(
      `INSERT INTO "user"(name, username, email, password, address, phone_number)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;`,
      [name, username, email, password, address, phoneNumber]
    );
    rows[0].password = undefined;
    res.status(201).json({
      status: "success",
      data: rows[0],
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// @ROUTES       /api/auth/login
// @DESC         Login an existing user
// @ACCESS       PUBLIC
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const {
      rows,
    } = await db.query(
      `SELECT * from "user" WHERE email = $1 AND password = $2`,
      [email, password]
    );
    const user = rows[0];
    if (!user) {
      return res.status(404).json({ error: `Invalid credential` });
    }
    user.password = undefined;
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
