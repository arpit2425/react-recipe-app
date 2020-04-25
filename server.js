const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "config.env" });
mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.error(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT} `));
