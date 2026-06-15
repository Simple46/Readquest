import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const achievements = [
  {
    name: "First Steps",
    description: "Complete your first book",
    icon: "trophy",
    xpReward: 50,
    requirement: "complete_1_book",
  },
  {
    name: "Book Worm",
    description: "Complete 5 books",
    icon: "book-open",
    xpReward: 200,
    requirement: "complete_5_books",
  },
  {
    name: "Weekend Reader",
    description: "Read for 7 days straight",
    icon: "flame",
    xpReward: 100,
    requirement: "streak_7",
  },
  {
    name: "Reading Master",
    description: "Read for 30 days straight",
    icon: "crown",
    xpReward: 500,
    requirement: "streak_30",
  },
  {
    name: "Referral Champion",
    description: "Refer 5 friends",
    icon: "users",
    xpReward: 250,
    requirement: "refer_5",
  },
  {
    name: "Page Turner",
    description: "Read 1,000 pages",
    icon: "file-text",
    xpReward: 300,
    requirement: "read_1000_pages",
  },
];

async function seed() {
  console.log("Seeding achievements...");

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { name: achievement.name },
      update: {},
      create: achievement,
    });
  }

  console.log("✅ Achievements seeded");
}

seed()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
