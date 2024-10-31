import express from "express";
import process from "node:process";
import path from "node:path";
import { sequelize } from "./models/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });