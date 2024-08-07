const express = require("express");
const router = express.Router();
const { register } = require("./controller");
const { userValidation } = require("../../models/users/validation");

router.post("/", userValidation, register);

module.exports = router;
