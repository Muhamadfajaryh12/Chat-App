const ContactService = require("./service");
const InvariantError = require("../../exceptions/InvariantError");
const contactService = new ContactService();

const addContact = async (req, res) => {
  const { id_user_1, id_user_2 } = req.body;
  try {
    const response = await contactService.addContact({ id_user_1, id_user_2 });
    res.status(201).json({
      message: "Added Successfully",
      response,
    });
  } catch (error) {
    if (error instanceof InvariantError) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

const getContact = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await contactService.getContact({ id });
    res.status(200).json({
      response,
    });
  } catch (error) {
    if (error instanceof InvariantError) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addContact,
  getContact,
};
