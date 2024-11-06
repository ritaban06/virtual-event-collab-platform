import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "/public/index.html"));
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Handle creating and joining rooms
    socket.on("createRoom", (room) => {
        socket.join(room);
        socket.emit("roomCreated", room); // Notify the creator
        console.log(`Room created: ${room}`);
    });

    socket.on("joinRoom", (room) => {
        socket.join(room);
        socket.emit("roomJoined", room); // Notify the user joining
        socket.to(room).emit("userJoined", socket.id); // Notify other users in the room
        console.log(`User ${socket.id} joined room: ${room}`);
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(9000, () => {
    console.log(`Server is listening on port 9000`);
});
