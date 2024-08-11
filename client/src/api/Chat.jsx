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
  return { getListChat };
})();

export { ChatAPI };
