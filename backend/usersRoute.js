const express = require("express");
const app = express.Router();
const bcrypt = require("bcryptjs");
const User = require("./userSchema");
const jwt = require("jsonwebtoken");
const session = require("express-session");

require("dotenv").config();
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set secure: true if using HTTPS
  })
);

function AuthMiddleWare(req, res, next) {
  const token = req.session.token; // Fetch token from session

  if (!token) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token expired or invalid" });
    }
    req.user = user;
    next();
  });
}

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error Fetching users", error: error });
  }
});

//register
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ message: "Missig required fields" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    req.session.token = token;
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error message", Error: err });
  }
});

//login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) return res.status(400).json({ message: "User Not found" });
  try {
    password.trim();
    const hashedPass = await bcrypt.compare(password, existingUser.password);
    if (!hashedPass)
      return res.status(401).json({ message: "Incorrect Password" });
    if (hashedPass && email === existingUser.email) {
      const token = jwt.sign({ existingUser }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      req.session.token = token;

      res.json({
        token,
        username: existingUser.username,
        email: existingUser.email,
        _id: existingUser._id,
      });
    }
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.put("/profile/:id", async (req, res) => {
  const userId = req.params.id;
  const { username, currentPass, newPass } = req.body;

  try {
    const existingUser = await User.findById(userId);
    if (!existingUser && !existingUser.password === currentPass) {
      res.status(500).send("Old password does not match");
    }
    const updatedUser = { username };
    if (newPass) {
      const saltRounds = await bcrypt.genSalt(10);
      newPass.trim();
      const hashedPassword = await bcrypt.hash(newPass, saltRounds);
      updatedUser.password = hashedPassword;
    }
    const user = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.json({ message: "Logged out successfully" });
  });
});

app.put("/savedList/:id", async (req, res) => {
  const userId = req.params.id;
  const placeId = req.body.savedList;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updateQuery = user.savedList.includes(placeId)
      ? { $pull: { savedList: placeId } } // Remove if exists
      : { $addToSet: { savedList: placeId } };

    const updatedUser = await User.findByIdAndUpdate(userId, updateQuery, {
      new: true, // Returns the updated user
      runValidators: true,
    });
    res.json({ savedList: updatedUser.savedList });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/savedList/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ savedList: user.savedList });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/favourites/:id", async (req, res) => {
  const userId = req.params.id;
  const placeId = req.body.favourites;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updateQuery = user.favourites.includes(placeId)
      ? { $pull: { favourites: placeId } } // Remove if exists
      : { $addToSet: { favourites: placeId } };

    const updatedUser = await User.findByIdAndUpdate(userId, updateQuery, {
      new: true, // Returns the updated user
      runValidators: true,
    });
    res.json({ favourites: updatedUser.favourites });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/favourites/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ favourites: user.favourites });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = app;
