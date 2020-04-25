const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  joinDate: {
    type: Date,
    default: Date.now(),
  },
  favourite: {
    type: [Schema.Types.ObjectId],
    ref: "Recipies",
  },
});
mongoose.model("User", userSchema);
