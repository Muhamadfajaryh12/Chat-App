const joi = require("joi");

const contacs = joi.object({
  id_user_1: joi.string().required(),
  id_user_2: joi.string().required(),
});

module.exports = { contacs };
