const encryptData = require("../../helpers/encrypt");
const decryptData = require("../../helpers/decrypt");
const userModel = require("../../models/User");
exports.createUser = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("User already exist");
    }
    const newUser = new userModel({
      ...req.body,
      password: encryptData(req.body.password),
    });
    await newUser.save();
    return res.send("user created successfully").status(200);
  } catch (error) {
    console.log(`some error occure ${error}`);
  }
};
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email: req.body.username });
    if (!existingUser) {
      return res.json({ msg: "user not found", status: false });
    }
    if (decryptData(existingUser.password) !== password) {
      return res.json({ msg: "invalid user", status: false });
    }
    return res.json({ msg: "login successfull done", status: true });
  } catch (error) {
    console.log(`some error occure: ${error.message}`);
    return res.status(400).json({ msg: `${error.message}`, status: false });
  }
};
exports.getallusers = async (req, res) => {
  try {
    const result = await userModel.find();
    console.log(res);
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
