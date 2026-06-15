import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

const router = Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, password, fullName, referralCode } = req.body;

    // Check if user exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate referral code
    const newReferralCode = `RQ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        referralCode: newReferralCode,
        referredBy: referralCode || null,
      },
    });

    // Handle referral XP if code provided
    if (referralCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode },
      });

      if (referrer) {
        await prisma.referral.create({
          data: {
            referrerId: referrer.id,
            referredId: user.id,
          },
        });

        // Award XP to referrer (will process in next section)
        await prisma.xpHistory.create({
          data: {
            userId: referrer.id,
            amount: 50,
            action: "referral",
            description: `Referred ${fullName}`,
          },
        });

        await prisma.user.update({
          where: { id: referrer.id },
          data: { xp: { increment: 50 } },
        });
      }
    }

    // Award welcome XP
    await prisma.xpHistory.create({
      data: {
        userId: user.id,
        amount: 50,
        action: "register",
        description: "Welcome bonus for joining ReadQuest",
      },
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { xp: { increment: 50 } },
    });

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        xp: user.xp + 50,
        referralCode: user.referralCode,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Failed to create account" });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        xp: user.xp,
        referralCode: user.referralCode,
        currentStreak: user.currentStreak,
        longestStreak: user.longestStreak,
        totalPagesRead: user.totalPagesRead,
        booksCompleted: user.booksCompleted,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Failed to sign in" });
  }
});

// GET /api/auth/me
router.get("/me", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        achievements: {
          include: { achievement: true },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      avatarUrl: user.avatarUrl,
      xp: user.xp,
      referralCode: user.referralCode,
      currentStreak: user.currentStreak,
      longestStreak: user.longestStreak,
      totalPagesRead: user.totalPagesRead,
      booksCompleted: user.booksCompleted,
      achievements: user.achievements.map((ua) => ua.achievement),
    });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
