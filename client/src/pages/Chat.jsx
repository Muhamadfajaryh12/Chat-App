import React, { useEffect, useState } from "react";
import UserBox from "../components/common/UserBox";
import ChatTabs from "../components/common/tabs/ChatTabs";
import UserTabs from "../components/common/tabs/UserTabs";
import { IoMdSend } from "react-icons/io";
import ChatBox from "../components/common/ChatBox";
import Banner from "../components/common/Banner";
import { ChatAPI } from "../api/Chat";
import { io } from "socket.io-client";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

const Chat = () => {
  const [tabs, setTabs] = useState("chat");
  const [content, setContent] = useState(null);
  const [chat, setChat] = useState([]);
  const [name, setName] = useState("");
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState([]);
  const [user, setUser] = useState(null);
  const { register, handleSubmit } = useForm();
  const auth = useAuth();

  useEffect(() => {
    if (auth.user?.id) {
      setUser(auth.user.id);
    }
  }, [auth.user]);
  console.log(user);
  const ActiveTabs = (param) => {
    setTabs(param);
  };
  const getData = async (content) => {
    setContent(content);

    const response = await ChatAPI.getChat(user, content);
    setChat(response.data.result);
    setName(response.data.userResult.username);
  };

  useEffect(() => {
    const socketClient = io("http://localhost:3000");
    setSocket(socketClient);
    console.log(user);

    socketClient.on("connect", () => {
      socketClient.emit("onlineUser", user);
    });

    socketClient.on("getOnlineUsers", (res) => {
      setOnline(res);
    });

    socketClient.on("getMessage", (newMessage) => {
      setChat((prevChat) => [...prevChat, newMessage]);
    });
    return () => {
      socketClient.off("getOnlineUsers");
      socketClient.off("getMessage");
      socketClient.disconnect();
    };
  }, []);

  const onSubmit = async (data) => {
    const { chat_text, sender_id, receiver_id } = data;

    if (socket) {
      console.log("Sending message:", {
        sender_id: data.sender_id,
        receiver_id: data.receiver_id,
        chat_text: data.chat_text,
        chat_date: new Date(),
      });
      socket.emit("sendMessage", {
        sender_id: data.sender_id,
        receiver_id: data.receiver_id,
        chat_text: data.chat_text,
        chat_date: new Date(),
      });
    } else {
      console.error("Socket is not initialized");
    }
    await ChatAPI.sendChat({
      receiver_id,
      sender_id,
      chat_text,
    });
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
            <ChatTabs setContent={getData} dataOnline={online} id={user} />
          ) : (
            <UserTabs setContent={getData} dataOnline={online} />
          )}
        </div>

        <button
          className="bg-blue-400 p-2 text-white rounded-md absolute bottom-4 "
          onClick={() => auth.logoutAction()}
        >
          Logout
        </button>
      </div>

      <div className="h-screen w-full flex flex-col">
        {!content ? (
          <Banner />
        ) : (
          <div className="h-screen">
            <div className="w-auto h-10 border-2 p-2">
              <span>{name}</span>
            </div>
            <div className="relative h-3/4 overflow-auto">
              {chat?.map((item) => (
                <ChatBox key={item.chat_id} item={item} />
              ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-2 p-2">
                <input
                  type="text"
                  className="border-2 w-full rounded-sm "
                  {...register("chat_text")}
                />
                <input
                  type="hidden"
                  value={localStorage.getItem("id")}
                  {...register("sender_id")}
                />
                <input
                  type="hidden"
                  value={content}
                  {...register("receiver_id")}
                />
                <button
                  className="bg-green-600 p-2 text-white rounded-sm"
                  type="submit"
                >
                  <IoMdSend></IoMdSend>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
