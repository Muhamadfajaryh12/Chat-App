import axios from "axios";

const ContactAPI = (() => {
  const BASE_URL = `http://localhost:3001/api/contact`;
  const getContact = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/7`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const addContact = async ({ id_user_1, id_user_2 }) => {
    try {
      const response = await axios.post(BASE_URL, {
        id_user_1,
        id_user_2,
      });
      console.log(id_user_1, id_user_2);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getContact,
    addContact,
  };
})();

export { ContactAPI };
