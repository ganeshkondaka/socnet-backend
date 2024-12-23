const { Social } = require("../db/schemas");

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

module.exports = { data };
