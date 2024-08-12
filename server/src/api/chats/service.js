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

  async getDetailChat(id_user_1, id_user_2) {
    console.log(id_user_1, id_user_2);
    const query = `
    SELECT 
        chat.id as chat_id,
        chat.chat_text as chat_text,
        chat.chat_date as chat_date,
        chat.receiver_id as receiver,
        chat.sender_id as sender,
        sender.id as sender_id,
        sender.username as sender_username,
        receiver.id as receiver_id,
        receiver.username as receiver_username
    FROM chat
    JOIN users sender ON sender.id = chat.sender_id
    JOIN users receiver ON receiver.id = chat.receiver_id
    WHERE (chat.sender_id = ? AND chat.receiver_id = ?)
       OR (chat.receiver_id = ? AND chat.sender_id = ?)
    `;

    const [result] = await pool.query(query, [
      id_user_1,
      id_user_2,
      id_user_1,
      id_user_2,
    ]);
    return result;
  }
}
module.exports = ChatService;
