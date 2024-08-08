const express = require("express");
const router = express.Router();
const { register, login } = require("./controller");
const { userValidation } = require("../../models/users/validation");

router.post("/register", userValidation, register);
router.post("/login", userValidation, login);
module.exports = router;
