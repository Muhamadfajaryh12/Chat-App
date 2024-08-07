const joi = require("joi");

const user = joi.object({
  username: joi.string().max(255).required(),
  password: joi.string().max(255).required(),
});

module.exports = { user };
