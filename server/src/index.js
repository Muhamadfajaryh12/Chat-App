const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors());

dotenv.config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const user = require("./api/users/routes");
const contact = require("./api/contacs/routes");
const server = http.createServer(app);

app.use("/api/users", user);
app.use("/api/contact", contact);

server.listen(3001, () => {
  console.log("Server Running ");
});
