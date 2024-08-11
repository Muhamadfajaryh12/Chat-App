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
    const query = `SELECT
    chat.id as chat_id, 
    users.id as user_id, 
    users.username
    FROM chat
    JOIN users ON users.id = chat.receiver_id OR users.id = chat.sender_id
    WHERE chat.sender_id = ? OR chat.receiver_id = ?
    GROUP BY users.id`;
    const [result] = await pool.query(query, [id, id]);

    if (result.length == 0) {
      throw new InvariantError("Chat not found");
    }
    const filter = result.filter((item) => item.user_id != id);
    return filter;
  }
}
module.exports = ChatService;
