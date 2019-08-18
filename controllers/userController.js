const mongoose = require('mongoose');

const UserController = {
  async register(req, res, next) {
    const User = mongoose.model('User');
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });
    try {
      await user.save();
      return rez.result(res, true);
    } catch (e) {
      next(e);
    }
  },
}

module.exports = UserController;
