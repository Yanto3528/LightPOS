const db = require("../");
const category = require("./category");
const product = require("./product");
const transaction = require("./transaction");
const transactionDetail = require("./transactionDetail");
const user = require("./user");

db.query(category);
db.query(product);
db.query(transaction);
db.query(transactionDetail);
db.query(user);
