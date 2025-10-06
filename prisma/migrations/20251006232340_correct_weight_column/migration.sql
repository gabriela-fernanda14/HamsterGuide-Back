/*
  Warnings:

  - Added the required column `cientificName` to the `hamsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expectedLife` to the `hamsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `hamsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `hamsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `hamsters` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_hamsters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cientificName" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "habitat" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "curiosities" TEXT NOT NULL,
    "expectedLife" TEXT NOT NULL
);
INSERT INTO "new_hamsters" ("characteristics", "curiosities", "food", "habitat", "id", "image", "name") SELECT "characteristics", "curiosities", "food", "habitat", "id", "image", "name" FROM "hamsters";
DROP TABLE "hamsters";
ALTER TABLE "new_hamsters" RENAME TO "hamsters";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
