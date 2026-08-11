const express = require("express");
const { Pool } = require("pg");

const app = express();

const PORT = process.env.PORT || 3000;

const DB_HOST = process.env.DB_HOST || "postgres-service";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_NAME = process.env.DB_NAME || "devopsdb";
const DB_USER = process.env.DB_USER || "devops";
const DB_PASSWORD = process.env.DB_PASSWORD || "devopspass";

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD
});

app.get("/", async (req, res) => {
  res.json({
    application: "DevOps Challenge",
    status: "Running",
    message: "Kubernetes deployment is working"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      status: "Database Connected",
      time: result.rows[0].now
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);

    res.status(500).json({
      status: "Database Connection Failed",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
