import express from "express";
import process from "node:process";
import path from "node:path";
import { sequelize } from "./Models/_db.js";
import { clerkMiddleware } from '@clerk/express'

//Import routers
import userRouter from './Routes/userRoutes.js';
import webRouter from './Routes/webhookRoutes.js';

const app = express();
app.use(express.json());
app.use(clerkMiddleware())

const PORT = process.env.PORT || 5000;

// Load API routes
app.use("/api/users", userRouter);
app.use("/api/webhook", webRouter);

// 404 route
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json({
    error: {
      code: err.status || 500,
      message: err.message,
    },
  });
});

// Start the server and authenticate the database connection
const startServer = async () => {
  console.log('Attempting to connect to the database...');
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync models to the database
    await sequelize.sync({ force: false }); 
    console.log('Models synced to the database.');

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    console.error('Stack Trace:', error.stack);
    process.exit(1);
  }
};

startServer();
