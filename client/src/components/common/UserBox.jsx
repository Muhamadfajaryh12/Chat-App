import React from "react";

const UserBox = ({ id, nama, setContent, dataOnline }) => {
  const isOnline = dataOnline.some((user) => user.userId == id);

  return (
    <div
      className="border-2 my-2 p-2 rounded-md"
      onClick={() => setContent(id)}
    >
      <img src="" alt="" />
      <p>{nama}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default UserBox;
