const pool = require("../../config/db");

const InvariantError = require("../../exceptions/InvariantError");

class ContactService {
  async addContact({ id_user_1, id_user_2 }) {
    const query = "INSERT INTO contacts (id_user_1,id_user_2) VALUES (?,?)";
    const result = await pool.query(query, [id_user_1, id_user_2]);
    if (result.affectedRows === 0) {
      throw new InvariantError("Add Failed");
    }
    return {
      id_user_1,
      id_user_2,
    };
  }

  async getContact({ id }) {
    const query = "SELECT * from contacs WHERE id_user_1 = ? OR  id_user_2 = ?";
    const [result] = await pool.query(query, [id]);
    if (result.affectedRows == 0) {
      throw new InvariantError("Contact not found");
    }
    return { result };
  }
}

module.exports = ContactService;
