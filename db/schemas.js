const  { mongoose } = require("mongoose") ;

const  { connect } = require("mongoose") ;
const  { config } = require("dotenv") ;

config();

const connectDB = async () => {
  try {
    await connect(process.env.mongo_url);
    console.log("Database connected");
  } catch (error) {
    console.log(error, "Error connecting to database");
  }
};

connectDB();

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

module.exports= { User, Social };
