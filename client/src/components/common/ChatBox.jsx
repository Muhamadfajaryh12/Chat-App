import React from "react";

const ChatBox = ({ position }) => {
  return (
    <div
      className={`flex ${
        position == "receiver" ? "justify-start " : "justify-end "
      } `}
    >
      <p
        className={` ${
          position == "receiver" ? " bg-blue-200" : " bg-green-200"
        } p-2 m-2`}
      >
        ChatBox
      </p>
    </div>
  );
};

export default ChatBox;
