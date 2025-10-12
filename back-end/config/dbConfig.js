import pg from "pg";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

// --- Database connection setup ---
let pool;
if (process.env.PROJECT_PHASE !== "production") {
  console.log("⚠️  Development mode: Using local database settings.");
  pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "Akrapex",
    password: "12345678",
    port: 5432,
  });
} else {
  console.log("🔒 Production mode: Using production database settings.");
  pool = new pg.Pool({
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false }, // important for cloud databases
  });
}

// --- Main initialization function ---
export const initializeDatabase = async () => {
  try {
    console.log("🟢 Initializing database...");

    // Enable pgcrypto (for UUID)
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);

    // --- Create users table ---
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone_number VARCHAR(14) UNIQUE,
        email TEXT UNIQUE NOT NULL,
        password TEXT,
        user_role TEXT NOT NULL CHECK(user_role IN ('regular','agent')),
        email_status BOOLEAN NOT NULL DEFAULT false
      );
    `);

    // --- Create properties table ---
    await pool.query(`
      CREATE TABLE IF NOT EXISTS properties (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        price MONEY NOT NULL,
        description TEXT NOT NULL,
        property_type TEXT NOT NULL CHECK (property_type IN ('residential','commercial','land','industrial')),
        property_size TEXT,
        trade_option TEXT NOT NULL CHECK (trade_option IN ('buy','rent')),
        verification_status BOOLEAN DEFAULT false,
        bedroom INT,
        bathroom INT,
        created_on TIMESTAMP DEFAULT NOW(),
        owners_id INT REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    console.log("✅ Tables created or already exist.");

    // --- Check if users already exist ---
    const { rows } = await pool.query("SELECT COUNT(*) AS count FROM users;");
    const userCount = parseInt(rows[0].count, 10);

    if (userCount === 0) {
      console.log("👤 No users found — populating default users...");

      await pool.query(
        `
        INSERT INTO users (name, phone_number, email, password, user_role, email_status)
        VALUES 
        ($1, $2, $3, $4, $5, $6),
        ($7, $8, $9, $10, $11, $12);
        `,
        [
          "John Doe",
          "+2348012345678",
          "john@example.com",
          "hashed_password_123",
          "regular",
          true,
          "Sarah Johnson",
          "+2348098765432",
          "sarah@example.com",
          "hashed_password_456",
          "agent",
          false,
        ]
      );

      const result = await pool.query(insertUsers);
      const johnId = result.rows[0].id;
      const sarahId = result.rows[1].id;

      const sql = fs.readFileSync(
        "./properties_inserts_restricted.sql",
        "utf8"
      );

      // Run all queries at once
      await pool.query(sql);
      console.log("✅ Default properties inserted.");

      console.log("✅ Default users inserted.");
    } else {
      console.log(
        `👥 ${userCount} user(s) already exist — skipping user population.`
      );
    }
  } catch (err) {
    console.error("❌ Database setup failed:", err);
  }
};

export default pool;
