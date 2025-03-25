const mongoose = require("mongoose");
mongoose.set("bufferCommands", false);
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log("error:", error);
  }
};
module.exports = dbConnection;
