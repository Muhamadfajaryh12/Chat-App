import React from "react";

const UserBox = ({ nama, setContent }) => {
  return (
    <div
      className="border-2 my-2 p-2 rounded-md"
      onClick={() => setContent(nama)}
    >
      <img src="" alt="" />
      <p>{nama}</p>
    </div>
  );
};

export default UserBox;
