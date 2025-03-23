const express = require("express");
const cors = require("cors");
const dbConnection = require("./db");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRoutes");
const addRollRouter = require("./routers/addRoll");
const app = express();
app.use(express.static("images"));
require("dotenv").config();
// db connection
dbConnection();
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/roll", addRollRouter);
//server
app.get("/", (req, res) => {
  res.send("server is running..");
});
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
