import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messageReceive, setMessageReceive] = useState("");
  const socket = io.connect("http://localhost:3001");

  const onMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceive(data.message);
    });
  }, [socket]);
  return (
    <>
      <input
        type="text"
        onChange={(event) => setMessage(event.target.value)}
      ></input>
      <button onClick={onMessage}>Send Message</button>
      <h6>{messageReceive}</h6>
    </>
  );
}

export default App;
