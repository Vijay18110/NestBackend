const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  userName: { type: String, require: true },
  email: {
    type: String,
    require: true,
    unique: [true, "email must be unique"],
  },
  password: { type: String, require: true },
});
module.exports = mongoose.model("user", UserSchema);
