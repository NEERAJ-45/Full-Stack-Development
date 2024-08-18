const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Mini-Project1");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ], // An array to store multiple user references who liked the post
});

module.exports = mongoose.model("post", postSchema);
