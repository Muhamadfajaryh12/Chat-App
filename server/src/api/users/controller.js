const UserService = require("./service");
const InvariantError = require("../../exceptions/InvariantError");

const userService = new UserService();

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await userService.register({ username, password });
    res.status(201).json({
      message: "Register Successfully",
      response,
    });
  } catch (error) {
    if (error instanceof InvariantError) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
};
