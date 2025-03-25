const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedList: [
    {
      type: String,
    },
  ],
  favourites: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
