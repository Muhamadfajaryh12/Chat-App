const joi = require("joi");

const contacs = joi.object({
  id_user_1: joi.number().required(),
  id_user_2: joi.number().required(),
});

module.exports = { contacs };
