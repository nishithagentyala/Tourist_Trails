const express = require("express");
const app = express();
const userRoute = require("./usersRoute");
const cors = require("cors");
const db = require("./db");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/users", userRoute);
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(8000, console.log("Listening to the port 8000"));
