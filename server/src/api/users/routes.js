const express = require("express");
const router = express.Router();
const { register, login, profile } = require("./controller");
const { userValidation } = require("../../models/users/validation");

router.post("/register", userValidation, register);
router.post("/login", userValidation, login);
router.get("/:id", profile);
module.exports = router;
