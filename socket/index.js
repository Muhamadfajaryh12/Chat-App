const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors()); // Enable CORS

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

let onlineUsers = [];
io.on("connection", (socket) => {
  console.log(`A user connected: ${socket.id}`);

  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find((user) => user.userId == message.receiver_id);
    console.log("Sending message to:", user);
    if (user) {
      io.to(user.socketId).emit("getMessage", message);
    } else {
      console.log("User not found or not online");
    }

    const sender = onlineUsers.find((user) => user.userId == message.sender_id);
    if (sender) {
      io.to(sender.socketId).emit("getMessage", message);
      console.log("Message sent to sender:", message);
    } else {
      console.log("Sender not found or not online");
    }
  });

  socket.on("onlineUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    io.emit("getOnlineUsers", onlineUsers);
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.userId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
    console.log("User disconnected");
  });
  console.log(onlineUsers);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
