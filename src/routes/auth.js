const { Router } = require("express");

const auth = require("../controllers/auth");
const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validator/auth");
const validateResult = require("../middlewares/validator/validationResult");

const router = Router();

router.post("/register", validateRegister, validateResult, auth.register);
router.post("/login", validateLogin, validateResult, auth.login);

module.exports = router;
