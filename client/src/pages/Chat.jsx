import React, { useState } from "react";
import UserBox from "../components/common/UserBox";
import ChatTabs from "../components/common/tabs/ChatTabs";
import UserTabs from "../components/common/tabs/UserTabs";
import { IoMdSend } from "react-icons/io";
import ChatBox from "../components/common/ChatBox";
import Banner from "../components/common/Banner";
const Chat = () => {
  const [tabs, setTabs] = useState("chat");
  const [content, setContent] = useState(null);
  const ActiveTabs = (param) => {
    setTabs(param);
  };
  return (
    <div className="h-screen flex">
      <div className="w-96 h-screen border-2 p-5 relative">
        <p className="text-xl font-bold text-center mb-2">Chat</p>
        <div className="flex justify-evenly">
          <button
            onClick={() => ActiveTabs("chat")}
            className={`w-full  ${
              tabs == "chat" ? "font-semibold border-b-2" : ""
            }`}
          >
            Chats
          </button>
          <button
            onClick={() => ActiveTabs("contact")}
            className={`w-full  ${
              tabs == "contact" ? "font-semibold border-b-2" : ""
            }`}
          >
            Contacts
          </button>
        </div>
        <div className="">
          {tabs == "chat" ? (
            <ChatTabs setContent={setContent} />
          ) : (
            <UserTabs setContent={setContent} />
          )}
        </div>

        <button className="bg-blue-400 p-2 text-white rounded-md absolute bottom-4 ">
          Logout
        </button>
      </div>

      <div className="h-screen w-full flex flex-col">
        {!content ? (
          <Banner />
        ) : (
          <div className="">
            <div className="w-auto h-10 border-2 p-2">
              <span>Nama</span>
            </div>
            <div className="relative h-screen">
              <ChatBox position={"sender"} />
              <ChatBox position={"receiver"} />
              <ChatBox position={"receiver"} /> <ChatBox position={"sender"} />
            </div>
            <div className="flex gap-2 p-2">
              <input type="text" className="border-2 w-full rounded-sm " />
              <button className="bg-green-600 p-2 text-white rounded-sm">
                <IoMdSend></IoMdSend>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
