const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  avatar: String,
  role: { type: String, enum: ["admin", "user"], default: "user" }
  // favorites: [{ type: Schema.Types.ObjectId, ref: "Article" }]
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
