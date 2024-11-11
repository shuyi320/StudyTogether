import express from "express";
import process from "node:process";
import { sequelize } from "./Models/_db.js";
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import cors from 'cors';
import db from './Models/_db.js'
import 'dotenv/config'
const { Message } = db

//Import routers
import userRouter from './Routes/userRoutes.js';
import webRouter from './Routes/webhookRoutes.js';
import messageRouter from './Routes/messageRoutes.js';

const app = express();
app.use(express.json());

// Create server and attach Socket.IO
const server = createServer(app)
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST"]
}));

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 5000;

// Load API routes
app.use("/api/users", userRouter);
app.use("/api/webhooks", webRouter);
app.use("/api/message", messageRouter);

// Start the server and authenticate the database connection
const startServer = async () => {
  console.log('Attempting to connect to the database...');
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync models to the database
    await sequelize.sync({ alter: true });
    console.log('Models synced to the database.');

    // Handle socket connection
    io.on('connection', (socket) => {
      console.log('User connected:', socket.id);

      // Listen for incoming messages from client-side
      socket.on('chatMessage', async (data) => {
          // Broadcast the message to all connected clients
        console.log('Broadcast the message to all connected clients', data)
        const newMessage = await Message.create({
            roomId: data.roomId,
            messageId: data.messageId,
            senderId: data.senderId,  
            text: data.text,  
        });
          io.emit('chatMessage', data);
        });

      // Handle disconnection
      socket.on('disconnect', () => {
          console.log('User disconnected:', socket.id);
      });
    });

    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    console.error('Stack Trace:', error.stack);
    process.exit(1);
  }
};


startServer();