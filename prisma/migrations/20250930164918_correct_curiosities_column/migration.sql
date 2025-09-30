/*
  Warnings:

  - You are about to drop the column `curoisities` on the `hamsters` table. All the data in the column will be lost.
  - Added the required column `curiosities` to the `hamsters` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_hamsters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "curiosities" TEXT NOT NULL
);
INSERT INTO "new_hamsters" ("characteristics", "food", "habitat", "id", "image", "name") SELECT "characteristics", "food", "habitat", "id", "image", "name" FROM "hamsters";
DROP TABLE "hamsters";
ALTER TABLE "new_hamsters" RENAME TO "hamsters";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
