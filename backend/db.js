const mongoose = require("mongoose");
require("dotenv").config();
const db = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log("Mongo connection Error" + err);
  });
module.exports = db;
