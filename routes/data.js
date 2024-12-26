const { Social, User } = require("../db/schemas");

const data = async (req, res) => {
  const data = await req.body;
  // console.log("data is :", data);
  try {
    const newdata = await Social.create(data);
    // console.log("new data created", newdata);
    res.status(200).json({ message: "new data created", newdata });
  } catch (error) {
    console.log("error while creating new data", error);
    res.status(500).json({ message: "error while creating new data", error });
  }
};

const getsocials = async (req, res) => {
  const username = req.params["username"];
  try {
    //  Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const usersocials = await Social.find({ user: user._id });
    // console.log("data found", usersocials);
    return res.status(200).json({ message: "user socials", usersocials });
  } catch (error) {
    console.log("error while finding data", error);
    return res
      .status(500)
      .json({ message: "error while finding socials data" });
  }
};

const getAllUsers = async (req, res) => {
  const admin = req.params["admin"];
  if (admin !== process.env.JWT_SECREAT) {
    return res.status(401).json({ message: "Unauthorized...! you are not admin" });
  }

  try {
    const users = await User.find({});
    return res.status(200).json({ message: "all users", users });
  } catch (error) {
    console.log("error while getting all users", error);
    return res.status(500).json({ message: "error while getting all users" });
  }
};

const deleteUser = async (req, res) => {
  const admin = req.params["admin"];
  const username = req.params["username"];
  if (admin !== process.env.JWT_SECREAT) {
    return res.status(401).json({ message: "Unauthorized...! you are not admin" });
  }

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user's socials
    await Social.deleteMany({ user: user._id });

    // Delete user
    await User.deleteOne({ _id: user._id });

    return res.status(200).json({ message: "User and their socials deleted" });
  } catch (error) {
    console.log("error while deleting user and their socials", error);
    return res
      .status(500)
      .json({ message: "error while deleting user and their socials" });
  }
};

module.exports = { data, getsocials, getAllUsers, deleteUser };
