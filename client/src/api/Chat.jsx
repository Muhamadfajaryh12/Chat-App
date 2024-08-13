import axios from "axios";

const ChatAPI = (() => {
  const BASE_URL = `http://localhost:3001/api/chat`;
  const getListChat = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/7`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getChat = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/7/${id}`);
      console.log(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const sendChat = async () => {
    try {
      const response = await axios.post();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return { getListChat, getChat };
})();

export { ChatAPI };
