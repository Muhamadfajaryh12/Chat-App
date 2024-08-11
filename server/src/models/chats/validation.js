const { chats } = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const chatValidation = async (req, res, next) => {
  const response = await chats.validate(req.body);

  if (response.error) {
    res.json({
      message: response.error.message,
    });
  } else {
    next();
  }
};

module.exports = { chatValidation };
