const { Social, User } = require("../db/schemas");

const data = async (req, res) => {
  const data = await req.body;
  console.log("data is :", data);
  try {
    const newdata = await Social.create(data);
    console.log("new data created", newdata);
    res.status(200).json({ message: "new data created", newdata });
  } catch (error) {
    console.log("error while creating new data", error);
    res.status(500).json({ message: "error while creating new data", error });
  }
};

const getsocials = async (req, res) => {
  const username = req.params["username"];
  try {
     // Find the user by username
     const user = await User.findOne({ username });
     if (!user) {
       return res.status(404).json({ message: "User not found" });
     }

    const usersocials = await Social.find({ user: user._id });
    console.log("data found", usersocials);
    return res.status(200).json({ message: "data found", usersocials });
  } catch (error) {
    console.log("error while finding data", error);
    return res.status(500).json({ message: "error while finding socials data" });
  }
};
module.exports = { data, getsocials };
