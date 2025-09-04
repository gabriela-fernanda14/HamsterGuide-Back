/*
  Warnings:

  - You are about to drop the `Hamster` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Hamster";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "hamsters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "curoisities" TEXT NOT NULL
);
