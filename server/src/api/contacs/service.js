const pool = require("../../config/db");

const InvariantError = require("../../exceptions/InvariantError");

class ContactService {
  async addContact({ id_user_1, id_user_2 }) {
    const query = "INSERT INTO contact (id_user_1,id_user_2) VALUES (?,?)";
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
    const query = `
        SELECT contact.id AS contact_id, 
               users.id AS user_id, 
               users.username, 
               users.password
        FROM contact 
        JOIN users ON users.id = contact.id_user_1 OR users.id = contact.id_user_2
        WHERE contact.id_user_1 = ? OR contact.id_user_2 = ?
    `;
    const [result] = await pool.query(query, [id, id]);
    if (result.affectedRows == 0) {
      throw new InvariantError("Contact not found");
    }
    const filter = result.filter((item) => item.user_id !== 7);
    return { filter };
  }
}

module.exports = ContactService;
