const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  username: {
    type: String,
    required: true,
  },
});
mongoose.model("Recipe", recipeSchema);
