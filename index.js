const express = require("express");

const cors = require("cors");
const {  Signupcont } = require("./routes/authfile");
const { data, getsocials, getAllUsers, deleteUser } = require("./routes/data");
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
app.get("/all/:admin", getAllUsers);
app.delete("/del/:admin/:username", deleteUser);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
