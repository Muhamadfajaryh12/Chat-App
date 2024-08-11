const router = require("express").Router();
const { sendChat, getChat } = require("./controller");
const { chatValidation } = require("../../models/chats/validation");

router.post("/", chatValidation, sendChat);
router.get("/:id", getChat);
module.exports = router;
