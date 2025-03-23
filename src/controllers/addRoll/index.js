const uploadToCloudinary = require("../../helpers/cloudinary");
const encryptData = require("../../helpers/encrypt");
const Roll = require("../../models/Roll");
exports.addRoll = async (req, res) => {
  try {
    const isExistingRoll = await Roll.findOne({ email: req.body.email });
    if (isExistingRoll) {
      return res.json({
        message: "roll already exist",
        status: false,
        statusCode: "400",
      });
    }
    const newRoll = new Roll({
      ...req.body,
      avatar: await uploadToCloudinary(req.file.path),
      password: encryptData(req.body.password),
    });
    await newRoll.save();
    return res.json({
      message: "roll add successfuly",
      status: true,
      statusCode: 200,
    });
  } catch (error) {
    console.log(`some error occure: ${error}`);
    res.json({ status: false, statusCode: 400, message: `${error.message}` });
  }
};
exports.getallRoll = async (req, res) => {
  try {
    console.log(req.query);
    const result = await Roll.find();
    return res.json({
      msg: "data get successfully",
      status: true,
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: `${error.message}`,
      status: false,
      statusCode: 400,
      data: [],
    });
  }
};
