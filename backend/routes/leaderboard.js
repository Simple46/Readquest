import { Router } from "express";
import prisma from "../lib/prisma.js";

const router = Router();

// GET /api/leaderboard?period=global|weekly|monthly
router.get("/", async (req, res) => {
  try {
    const { period = "global" } = req.query;

    const entries = await prisma.leaderboardEntry.findMany({
      where: { period },
      orderBy: { xp: "desc" },
      take: 50,
    });

    // If no entries yet, fetch from users
    if (entries.length === 0 && period === "global") {
      const users = await prisma.user.findMany({
        orderBy: { xp: "desc" },
        take: 50,
        select: {
          id: true,
          fullName: true,
          avatarUrl: true,
          xp: true,
        },
      });

      return res.json(
        users.map((u, i) => ({
          ...u,
          rank: i + 1,
          period: "global",
        })),
      );
    }

    res.json(entries.map((e, i) => ({ ...e, rank: i + 1 })));
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});

export default router;
