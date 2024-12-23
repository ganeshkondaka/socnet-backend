const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello world");
});
app.listen(3000, () => {
  console.log("app is running on port 300");
});
