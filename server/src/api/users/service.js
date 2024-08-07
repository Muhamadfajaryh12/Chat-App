const pool = require("../../config/db");
const InvariantError = require("../../exceptions/InvariantError");

class UserService {
  async register({ username, password }) {
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    const result = await pool.query(query, [username, password]);
    if (result.affectedRows === 0) {
      throw new InvariantError("Register Failed");
    }

    return { username, password };
  }
}

module.exports = UserService;
