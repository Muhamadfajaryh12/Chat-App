const pool = require("../../config/db");
const InvariantError = require("../../exceptions/InvariantError");

class ChatService {
  async sendChat({ receiver_id, sender_id, chat_text }) {
    try {
      const date = new Date();
      const query =
        "INSERT INTO chat (receiver_id,sender_id,chat_text,chat_date) VALUES (?,?,?,?)";
      const [result] = await pool.query(query, [
        receiver_id,
        sender_id,
        chat_text,
        date,
      ]);

      const response = result[0];
      return {
        response,
      };
    } catch (error) {
      console.error(error);
      throw new InvariantError("An error occurred during login.");
    }
  }

  async getChat({ id }) {
    const query = "SELECT * FROM chat WHERE sender_id = ? OR receiver_id = ?";
    const [result] = await pool.query(query, [id, id]);

    if (result.affectedRows == 0) {
      throw new InvariantError("Chat not found");
    }
    return result;
  }
}
module.exports = ChatService;
