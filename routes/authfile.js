const { User } = require("../db/schemas");

const Signupcont = async (req, res) => {
  // const username=req.body.username;
  const username = req.body.username;
  const password = req.body.password;
  try {
    const new_user = await User.create({ username, password });
    return res.status(200).json({ message: "new user created", new_user });
  } catch (error) {
    console.log("error while creating new user",error)
    return res.status(500).json({ message: "error while creating new user",error});
  }
};

const Signincont = async (req, res) => {
  const username = req.body.username;
  try {
    const existed = await User.findOne({ username });
    if (existed) {
      return res.status(200).json({ message: "user found", existed });
    }
  } catch (error) {
    return res.status(500).json({ message: "error while finding user" });
  }
};

module.exports = { Signincont, Signupcont };
