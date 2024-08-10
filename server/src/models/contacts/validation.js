const InvariantError = require("../../exceptions/InvariantError");
const { contacs } = require("./schema");

const contactValidation = async (req, res, next) => {
  const response = await contacs.validate(req.body);

  if (response.error) {
    res.json({
      message: response.error.message,
    });
  } else {
    next();
  }
};
module.exports = { contactValidation };
