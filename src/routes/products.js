const { Router } = require("express");

const products = require("../controllers/products");
const {
  validateCreateProduct,
  validateUpdateProduct,
} = require("../middlewares/validator/products");
const validateResult = require("../middlewares/validator/validationResult");
const auth = require("../middlewares/auth");

const router = Router();

router.get("/", auth, products.getAll);
router.get("/:id", auth, products.getSingle);
router.post("/", auth, validateCreateProduct, validateResult, products.create);
router.put(
  "/:id",
  auth,
  validateUpdateProduct,
  validateResult,
  products.update
);
router.delete("/:id", auth, products.deleteSingle);

module.exports = router;
