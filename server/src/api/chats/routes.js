const router = require("express").Router();
const { sendChat, getChat, getDetailChat } = require("./controller");
const { chatValidation } = require("../../models/chats/validation");

router.post("/", chatValidation, sendChat);
router.get("/:id", getChat);
router.get("/:id_1/:id_2", getDetailChat);
module.exports = router;
