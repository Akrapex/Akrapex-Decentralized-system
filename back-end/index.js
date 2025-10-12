import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import isAuthenticated from "./middleware/auth.js";
import cookieParser from "cookie-parser";
import authentication from "./routes/auth.js";
import pool from "./config/dbConfig.js";
import properties from "./routes/properties.js";
import bcrypt from "bcrypt";
import { initializeDatabase } from "./config/dbConfig.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    Credential: true,
  })
);

initializeDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authentication);
app.use("/api/v1/", properties);

let port = 5050;

// (async function hashfunction() {
//   let hash = await bcrypt.hash("12345678", 10);
//   console.log(hash);
// })();

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.get("/api/v1/auth/dashboard", isAuthenticated, (req, res) => {
  res.send({ success: true, msg: req.user });
});

// app.get("/properties", async (req, res) => {

// })

app.listen(port, () => {
  console.log(`server is now running on http://localhost:${port}`);
});
