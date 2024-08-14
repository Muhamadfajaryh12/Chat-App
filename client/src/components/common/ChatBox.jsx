import React from "react";

const ChatBox = ({ position, item }) => {
  return (
    <div
      className={`flex ${
        item.sender_id == localStorage.getItem("id")
          ? "justify-end "
          : "justify-start "
      } `}
    >
      <p
        className={` ${
          item.sender_id == localStorage.getItem("id")
            ? " bg-green-200"
            : " bg-blue-200"
        } p-2 m-2`}
      >
        {item.chat_text}
        <p className="" style={{ fontSize: "10px" }}>
          {new Date(item.chat_date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </p>
    </div>
  );
};

export default ChatBox;
