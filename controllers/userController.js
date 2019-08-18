const mongoose = require('mongoose');

const UserController = {
  async register(req, res, next) {
    const User = mongoose.model('User');
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    });
    try {
      await user.save();
      return res.send('User Registered!');
    } catch (e) {
      next(e);
    }
  },
}

module.exports = UserController;
