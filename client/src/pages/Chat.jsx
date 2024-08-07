import React from "react";
import UserBox from "../components/common/UserBox";

const Chat = () => {
  return (
    <div className="h-screen flex">
      <div className="w-96 h-screen border-2 p-5">
        <span className="text-xl font-bold ">Chat</span>
        <div className="section-list-user">
          {Array.from({ length: 10 }).map((_, index) => (
            <UserBox key={index} />
          ))}
        </div>
        <button className="bg-blue-400 p-2 w-full text-white rounded-md">
          Logout
        </button>
      </div>
      <div className="h-screen w-full flex flex-col">
        <div className="w-auto h-10 border-2 p-2">
          <span>Nama</span>
        </div>
        <div className=""></div>
        <div className="flex gap-2 p-2">
          <input type="text" className="border-2 w-full" />
          <button className="bg-green-300 p-1 text-white">Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
