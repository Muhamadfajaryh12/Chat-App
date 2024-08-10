const UserService = require("./service");
const InvariantError = require("../../exceptions/InvariantError");
const jwt = require("jsonwebtoken");
const userService = new UserService();

const generateAccesToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET);
};

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

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    await userService.login({ username, password });
    const token = generateAccesToken(username);
    res.status(200).json({
      message: "Login Successfully",
      token: token,
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
  login,
};
