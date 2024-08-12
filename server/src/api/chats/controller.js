const ChatService = require("./service");
const InvariantError = require("../../exceptions/InvariantError");
const chatService = new ChatService();

const sendChat = async (req, res) => {
  const { receiver_id, sender_id, chat_text } = req.body;
  try {
    const response = await chatService.sendChat({
      receiver_id,
      sender_id,
      chat_text,
    });
    res.status(201).json({
      message: "Send Successfully",
      response,
    });
  } catch (error) {
    if (error instanceof InvariantError) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

const getChat = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await chatService.getChat({ id });
    res.status(200).json({
      message: "List Chat",
      data,
    });
  } catch (error) {
    if (error instanceof InvariantError) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

const getDetailChat = async (req, res) => {
  const { id_1, id_2 } = req.params;
  console.log(id_1, id_2);
  try {
    const data = await chatService.getDetailChat(id_1, id_2);
    res.status(200).json({
      message: "List Chat",
      data,
    });
  } catch (error) {
    if (error instanceof InvariantError) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  sendChat,
  getChat,
  getDetailChat,
};
