const db = require("../");
const category = require("./category");
const product = require("./product");
const transaction = require("./transaction");
const transactionDetail = require("./transactionDetail");
const user = require("./user");

const categoryQuery = db.query(category);
const userQuery = db.query(user);
const productQuery = db.query(product);
const transactionQuery = db.query(transaction);
const transactionDetailQuery = db.query(transactionDetail);

const promises = [
  userQuery,
  productQuery,
  categoryQuery,
  transactionQuery,
  transactionDetailQuery,
];

Promise.all(promises)
  .then((values) => {
    console.log("Successfully created table in database");
  })
  .catch((error) => console.log(error));
