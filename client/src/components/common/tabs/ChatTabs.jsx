import React, { useState, useEffect } from "react";
import UserBox from "../UserBox";
import { ChatAPI } from "../../../api/Chat";
UserBox;
const ChatTabs = ({ setContent }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await ChatAPI.getListChat();
      setData(response);
    };
    getData();
  }, []);
  return (
    <div className="mt-2">
      <div className="section-list-user">
        {data?.data?.map((item) => (
          <UserBox
            key={item.user_id}
            nama={item.username}
            id={item.user_id}
            setContent={setContent}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatTabs;
