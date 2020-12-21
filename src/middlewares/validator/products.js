const { check } = require("express-validator");

exports.validateCreateProduct = [
  check("name", "Name is required").not().isEmpty(),
  check("price", "Price must be a number").isNumeric(),
  check("cost", "Cost must be a number").isNumeric(),
  check("stock", "Stock must be a number").isNumeric().optional(),
  check("image", "Image url is required").not().isEmpty().optional(),
  check("category_id", "Category is required").isNumeric().optional(),
  check("code", "Code is required").not().isEmpty().optional(),
  check("tax", "Tax is required").not().isEmpty().optional(),
];

exports.validateUpdateProduct = [
  check("name", "Name is required").not().isEmpty().optional(),
  check("price", "Price must be a number").isNumeric().optional(),
  check("cost", "Cost must be a number").isNumeric().optional(),
  check("stock", "Stock must be a number").isNumeric().optional(),
  check("image", "Image url is required").not().isEmpty().optional(),
  check("category_id", "Category is required").isNumeric().optional(),
  check("code", "Code is required").not().isEmpty().optional(),
  check("tax", "Tax is required").not().isEmpty().optional(),
];
