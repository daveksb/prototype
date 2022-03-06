-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "details" TEXT NOT NULL,
    "approval_id" TEXT NOT NULL
);
INSERT INTO "new_Service" ("approval_id", "details", "id") SELECT "approval_id", "details", "id" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
