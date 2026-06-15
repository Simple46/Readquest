import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/books.js";
import progressRoutes from "./routes/progress.js";
import leaderboardRoutes from "./routes/leaderboard.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://your-vercel-domain.vercel.app"]
        : ["http://localhost:5173"],
  }),
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "ReadQuest API is running",
    timestamp: new Date().toISOString(),
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
  console.log(`🚀 ReadQuest API running on http://localhost:${PORT}`);
});
