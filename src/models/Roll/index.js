const mongoose = require("mongoose");
const rollSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: {
      type: String,
      require: true,
      unique: [true, "email must be unique"],
    },
    password: { type: String, require: true },
    phone: { type: String, require: true },
    roll: { type: String, require: true },
    avatar: { type: String },
    status: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("roll", rollSchema);
