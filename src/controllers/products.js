const db = require("../db");

// ROUTES       /api/products/
// DESC         GET - Get all products
// ACCESS       PRIVATE
exports.getAll = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT * FROM product`);
    res.status(201).json({
      status: "success",
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ROUTES       /api/products/:id
// DESC         GET - Get single product
// ACCESS       PRIVATE
exports.getSingle = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      rows,
    } = await db.query(`SELECT * FROM product WHERE product_id = $1`, [id]);
    res.status(201).json({
      status: "success",
      data: rows[0],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ROUTES       /api/products/
// DESC         POST - Create new product
// ACCESS       PRIVATE
exports.create = async (req, res) => {
  const { name, price, cost } = req.body;
  try {
    const { rows } = await db.query(
      `INSERT INTO product (name, price, cost, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;`,
      [name, price, cost, req.user.user_id]
    );
    res.status(201).json({
      status: "success",
      data: rows[0],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ROUTES       /api/products/:id
// DESC         PUT - Update existing product
// ACCESS       PRIVATE
exports.update = async (req, res) => {
  const { name, price, cost, image, stock } = req.body;
  const { id } = req.params;
  try {
    const { rows } = await db.query(
      `UPDATE product
        SET name = $1, price = $2, cost = $3, image = $4, stock = $5
      WHERE product_id = $6
      RETURNING *;`,
      [name, price, cost, image, stock, id]
    );
    res.status(201).json({
      status: "success",
      data: rows[0],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ROUTES       /api/products/:id
// DESC         DELETE - Delete existing product
// ACCESS       PRIVATE
exports.deleteSingle = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      rowCount,
    } = await db.query(`DELETE FROM product WHERE product_id = $1`, [id]);
    if (rowCount === 0) {
      return res
        .status(404)
        .json({ error: "Cannot delete non existing product" });
    }
    res.status(201).json({
      status: "success",
      data: {},
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
