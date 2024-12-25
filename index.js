const express = require("express");

const cors = require("cors");
const {  Signupcont } = require("./routes/authfile");
const { data, getsocials } = require("./routes/data");
// const { Signincont, Signupcont } = require("./routes/authfile");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello world");
});

app.post("/signup", Signupcont);
app.post("/data", data);
app.get("/getsocials/:username", getsocials);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
