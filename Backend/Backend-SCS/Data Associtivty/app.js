const express = require("express");
const app = express();
const port = 3000;
const userModel = require("./models/user");
const postModel = require("./models/posts");

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Neeraj",
    age: 21,
    email: "neeraj@gmail.com",
  });

  res.send(user);
});
app.get("/create/post", async (req, res) => {
  let post = await postModel.create({
    postdata: "Neeraj is Stud Guy",
    user: "66b7c15c0a5b0defd2680352",
    email: "neeraj@gmail.com",
  });
  let user = await userModel.findOne({ _id: "66b7c15c0a5b0defd2680352" });
  user.posts.push(post._id);
  await user.save();
  res.send({post,user});
});

app.listen(port, () => {
  console.log("App is listening on port: " + port);
});
