const express = require("express");
const { addRoll, getallRoll } = require("../../controllers/addRoll");
const upload = require("../../middlewares/UploadFileThrowMulter");
const addRollRouter = express.Router();
addRollRouter.post("/add", upload.single("avatar"), addRoll);
addRollRouter.get("/get", getallRoll);
module.exports = addRollRouter;
