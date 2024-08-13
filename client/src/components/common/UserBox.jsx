import React from "react";

const UserBox = ({ id, nama, setContent }) => {
  return (
    <div
      className="border-2 my-2 p-2 rounded-md"
      onClick={() => setContent(id)}
    >
      <img src="" alt="" />
      <p>{nama}</p>
    </div>
  );
};

export default UserBox;
