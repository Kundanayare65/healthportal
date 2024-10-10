// videoCallServer/server.js

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("offer", (offer) => {
        socket.broadcast.emit("offer", offer);
    });

    socket.on("answer", (answer) => {
        socket.broadcast.emit("answer", answer);
    });

    socket.on("candidate", (candidate) => {
        socket.broadcast.emit("candidate", candidate);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

const PORT = 3001; // or any other port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
