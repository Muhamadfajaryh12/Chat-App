import React from "react";
import UserBox from "../UserBox";
UserBox;
const ChatTabs = () => {
  return (
    <div className="mt-2">
      <div className="section-list-user">
        {Array.from({ length: 10 }).map((_, index) => (
          <UserBox key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChatTabs;
