const InvariantError = require("../../exceptions/InvariantError");
const { user } = require("./schema");

const userValidation = async (req, res, next) => {
  const response = await user.validate(req.body);
  if (response.error) {
    res.json({
      message: response.error.message,
    });
  } else {
    next();
  }
};

module.exports = { userValidation };
