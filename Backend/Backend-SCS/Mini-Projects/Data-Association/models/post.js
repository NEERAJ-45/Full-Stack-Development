const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Mini-Project1");
const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: String,
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("post", postSchema);
