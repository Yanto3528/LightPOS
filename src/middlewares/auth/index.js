const jwt = require("jsonwebtoken");
const db = require("../../db");

const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res
      .status(401)
      .json({ error: "No token found. Access has been denied" });
  }

  try {
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const { rows } = await db.query(`SELECT * FROM "user" WHERE user_id = $1`, [
      decoded.id,
    ]);
    req.user = rows[0];
    return next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = auth;
