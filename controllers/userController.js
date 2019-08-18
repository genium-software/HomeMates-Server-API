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
      await User.find({
        // Find user document with the provided inputs
        email: req.body.email,
        password: req.body.password
      }).then(user => {
        if (!user[0]) {
          // No user is found in DB
          return res.status(400).send("Invalid email/password!");
        } else {
          if (
            user[0].email === req.body.email && // Validate email and password
            user[0].password === req.body.password
          ) {
            return res.status(200).send("Login successful!");
          } else {
            return res.status(400).send("Invalid email/password!");
          }
        } // Validation successful
      });
    } catch (e) {
      next(e);
    }
  },

  async changePass(req, res, next) {
    try {
      await User.find({ email: req.body.email }).then(user => {
        if (!user[0]) {
          // Validate input email to see if it exists
          return res.status(400).send("Email does not exist!");
        } else {
          // If it exists, change existing password with input password
          user[0].password = req.body.password;
          user[0].save();
          return res.status(200).send("Password has been changed!");
        }
      });
    } catch (e) {
      next(e);
    }
  }
};

module.exports = UserController;
