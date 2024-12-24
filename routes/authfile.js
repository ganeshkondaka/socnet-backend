const { User } = require("../db/schemas");

const Signupcont = async (req, res) => {
  // const username=req.body.username;
  const username = req.body.username;
  const existed = await User.findOne({username})
  if(existed){
    console.log("user already exists with this username")
    return res.status(400).json({message:"user already exists with this username"})
  }
  try {
    const new_user = await User.create({ username });
    return res.status(200).json({ message: "new user created", new_user });
  } catch (error) {
    console.log("error while creating new user",error)
    return res.status(500).json({ message: "error while creating new user",error});
  }
};

// const Signincont = async (req, res) => {
//   const username = req.body.username;
//   try {
//     const existed = await User.findOne({ username });
//     if (existed) {
//       return res.status(200).json({ message: "user found", existed });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: "error while finding user" });
//   }
// };

module.exports = {  Signupcont };
