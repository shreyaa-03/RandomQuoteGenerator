const express = require("express");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const connectDb = require("./config/db_connect");
const cors = require('cors')

const app = express();
app.use(cors())
connectDb();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/quoteRoutes"));

const port = process.env.PORT || 30001;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
