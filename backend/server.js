const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
  pingInterval: 10000,
  pingTimeout: 30000
});

app.use(cors());
app.use(express.json());

require("./services/scanService")(io);

server.listen(5000, () =>
  console.log("Backend running on http://localhost:5000")
);
