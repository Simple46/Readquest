import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/books.js";
import progressRoutes from "./routes/progress.js";
import leaderboardRoutes from "./routes/leaderboard.js";
// import uploadRoutes from "./routes/upload.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS — explicit preflight + middleware
app.options("*", cors());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://readquest-delta.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json({ limit: "10mb" }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
// app.use("/api/upload", uploadRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "ReadQuest API is running",
    timestamp: new Date().toISOString(),
    cors: "enabled for readquest-delta.vercel.app",
  });
});

// CORS test
app.get("/api/cors-test", (req, res) => {
  res.json({
    message: "CORS is working!",
    origin: req.headers.origin || "no origin",
    allowed: "https://readquest-delta.vercel.app",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`🚀 ReadQuest API running on port ${PORT}`);
  console.log(`📋 CORS enabled for: https://readquest-delta.vercel.app`);
});
