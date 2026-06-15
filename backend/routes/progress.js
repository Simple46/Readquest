import { Router } from "express";
import prisma from "../lib/prisma.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

// GET /api/progress — user's reading progress
router.get("/", authenticate, async (req, res) => {
  try {
    const progress = await prisma.readingProgress.findMany({
      where: { userId: req.userId },
      include: { book: true },
      orderBy: { lastReadAt: "desc" },
    });

    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});

// POST /api/progress — update reading progress
router.post("/", authenticate, async (req, res) => {
  try {
    const { bookId, currentPage, percentage, readingTime, isCompleted } =
      req.body;

    const progress = await prisma.readingProgress.upsert({
      where: {
        userId_bookId: {
          userId: req.userId,
          bookId,
        },
      },
      update: {
        currentPage,
        percentage,
        readingTime: { increment: readingTime || 0 },
        isCompleted: isCompleted || false,
        lastReadAt: new Date(),
      },
      create: {
        userId: req.userId,
        bookId,
        currentPage,
        percentage,
        readingTime: readingTime || 0,
        isCompleted: isCompleted || false,
      },
    });

    // Award XP for page read
    if (readingTime && readingTime > 0) {
      await prisma.xpHistory.create({
        data: {
          userId: req.userId,
          amount: 1,
          action: "read_page",
          description: `Read page ${currentPage}`,
          bookId,
        },
      });

      await prisma.user.update({
        where: { id: req.userId },
        data: {
          xp: { increment: 1 },
          totalPagesRead: { increment: 1 },
        },
      });
    }

    // Award XP for completing book
    if (isCompleted) {
      await prisma.xpHistory.create({
        data: {
          userId: req.userId,
          amount: 100,
          action: "finish_book",
          description: "Completed a book",
          bookId,
        },
      });

      await prisma.user.update({
        where: { id: req.userId },
        data: {
          xp: { increment: 100 },
          booksCompleted: { increment: 1 },
        },
      });
    }

    res.json(progress);
  } catch (err) {
    console.error("Update progress error:", err);
    res.status(500).json({ error: "Failed to update progress" });
  }
});

export default router;
