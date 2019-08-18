const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/userController");

router.post("/register", UserController.register);

router.post("/login", UserController.login);

router.patch("/change_pass", UserController.changePass);

module.exports = router;
