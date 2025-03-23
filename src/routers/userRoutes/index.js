const express = require("express");
const {
  createUser,
  userLogin,
  getallusers,
} = require("../../controllers/userControllers");
const userRouter = express.Router();
userRouter.post("/create", createUser);
userRouter.post("/login", userLogin);
userRouter.get("/findall", getallusers);
module.exports = userRouter;
