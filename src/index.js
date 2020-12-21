require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const auth = require("./routes/auth");
const products = require("./routes/products");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", auth);
app.use("/api/products", products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
