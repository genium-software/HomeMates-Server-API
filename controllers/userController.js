const mongoose = require("mongoose");
const User = mongoose.model("User");

const UserController = {
  async register(req, res, next) {
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    });
    try {
      await user.save();
      return res.status(201).send("User Registered!");
    } catch (e) {
      next(e);
    }
  },

  async login(req, res, next) {
    try {
      await User.find({ // Find user document with the provided inputs
        email: req.body.email,
        password: req.body.password
      }).then(user => {
        if (
          user[0].email === req.body.email && // Validate email and password
          user[0].password === req.body.password
        ) {
          return res.status(200).send("Login successful!"); // Validation successful
        } else {
          return res.status(400).send("Invalid username/password!");
        } // Validation unsuccessful
      });
    } catch (e) {
      next(e);
    }
  }
};

module.exports = UserController;
