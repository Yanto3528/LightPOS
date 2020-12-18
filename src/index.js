require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const auth = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
