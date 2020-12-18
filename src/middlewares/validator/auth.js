const { check } = require("express-validator");

exports.validateRegister = [
  check("name", "Name is required").not().isEmpty(),
  check("username", "Username is required").not().isEmpty(),
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Password must be at least 6 or more character").isLength({
    min: 6,
  }),
];

exports.validateLogin = [
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Password must be at least 6 or more character").isLength({
    min: 6,
  }),
];
