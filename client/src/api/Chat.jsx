import axios from "axios";

const ChatAPI = (() => {
  const BASE_URL = `http://localhost:3001/api/chat`;
  const getListChat = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getChat = async (id_1, id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id_1}/${id}`);
      console.log(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const sendChat = async ({ receiver_id, sender_id, chat_text }) => {
    try {
      const response = await axios.post(`${BASE_URL}`, {
        receiver_id,
        sender_id,
        chat_text,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return { getListChat, getChat, sendChat };
})();

export { ChatAPI };
