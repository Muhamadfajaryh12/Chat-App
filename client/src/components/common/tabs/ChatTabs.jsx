import React, { useState, useEffect } from "react";
import UserBox from "../UserBox";
import { ChatAPI } from "../../../api/Chat";
import { useAuth } from "../../../hooks/useAuth";
UserBox;
const ChatTabs = ({ setContent, dataOnline, id }) => {
  const [data, setData] = useState([]);
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      const response = await ChatAPI.getListChat(localStorage.getItem("id"));
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
            dataOnline={dataOnline.filter(
              (onlineItem) => onlineItem.userId == item.user_id
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatTabs;
