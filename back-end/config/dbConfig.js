import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new pg.Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "Akrapex",
  password: process.env.DB_PASSWORD || "12345678",
  port: process.env.DB_PORT || 5432,
});

// Optional: log when connected
pool.on("connect", () => {
  console.log("✅ Connected to PostgreSQL");
});

export default pool;
