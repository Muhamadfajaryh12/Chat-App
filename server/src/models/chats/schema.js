const joi = require("joi");

const chats = joi.object({
  receiver_id: joi.number().required(),
  sender_id: joi.number().required(),
  chat_text: joi.string().required(),
});

module.exports = { chats };
