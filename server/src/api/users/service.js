const pool = require("../../config/db");
const InvariantError = require("../../exceptions/InvariantError");
const bcrypt = require("bcrypt");

class UserService {
  async register({ username, password }) {
    const hashPassword = await bcrypt.hash(password, 10);
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    const result = await pool.query(query, [username, hashPassword]);
    if (result.affectedRows === 0) {
      throw new InvariantError("Register Failed");
    }

    return { username, password };
  }

  async login({ username, password }) {
    try {
      const query = "SELECT * FROM users WHERE username = ?";
      const [result] = await pool.query(query, [username]);
      if (result.affectedRows == 0) {
        throw new InvariantError("User not found");
      }

      const user = result[0];
      const validatePassword = await bcrypt.compare(password, user.password);
      if (!validatePassword) {
        throw new InvariantError("Wrong Password");
      }

      return {
        id: user.id,
      };
    } catch (error) {
      console.error(error);
      throw new InvariantError("An error occurred during login.");
    }
  }
}

module.exports = UserService;
