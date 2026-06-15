import { Router } from "express";
import prisma from "../lib/prisma.js";

const router = Router();

// GET /api/books — list all active books
router.get("/", async (req, res) => {
  try {
    const { category, search } = req.query;

    const where = { isActive: true };

    if (category && category !== "all") {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { author: { contains: search, mode: "insensitive" } },
      ];
    }

    const books = await prisma.book.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    res.json(books);
  } catch (err) {
    console.error("Fetch books error:", err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// GET /api/books/:id — single book
router.get("/:id", async (req, res) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id: req.params.id },
    });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch book" });
  }
});

export default router;
