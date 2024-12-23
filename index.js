const express = require("express");

const cors = require("cors");
const { Signincont, Signupcont } = require("./routes/authfile");
const { data } = require("./routes/data");
// const { Signincont, Signupcont } = require("./routes/authfile");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello world");
});

app.post('/signup',Signupcont)
app.post('/signin',Signincont)
app.post('/data',data)

app.listen(3000, () => {
  console.log("app is running on port 300");
});
