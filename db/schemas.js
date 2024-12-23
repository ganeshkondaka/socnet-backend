import mongoose from "mongoose";

// User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// User model
const User = mongoose.model("User", userSchema);

// Social schema
const socialSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the "User" model
    required: true,
  },
});

// Social model
const Social = mongoose.model("Social", socialSchema);

export { User, Social };
