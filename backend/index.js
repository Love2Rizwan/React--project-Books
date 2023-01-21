const cors = require("cors");
const express = require("express");
const app = express();
const cookies = require("cookie-parser");
const route = require("./router");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.DB, { useNewUrlParser: true })
.then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err));
app.use(cors());
app.use(cookies());
app.use("/", route);

app.listen(8800, function () {
  console.log("Server is running...");
});
