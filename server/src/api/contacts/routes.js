const router = require("express").Router();
const { addContact, getContact } = require("./controller");
const { contactValidation } = require("../../models/contacts/validation");

router.post("/", contactValidation, addContact);
router.get("/:id", getContact);
module.exports = router;
