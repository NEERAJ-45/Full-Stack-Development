bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      let user = await userModel.create({
        email,
        username,
        password: hash,
        name,
        age,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "MONDAY");
      res.cookie("token", token);
      res.send("registered");
    });
  });