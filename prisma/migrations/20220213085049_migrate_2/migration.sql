-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_system_flow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flow_name" TEXT NOT NULL,
    "flow_order" INTEGER NOT NULL,
    "page" TEXT NOT NULL,
    "approval_id" INTEGER NOT NULL
);
INSERT INTO "new_system_flow" ("approval_id", "flow_name", "flow_order", "id", "page") SELECT "approval_id", "flow_name", "flow_order", "id", "page" FROM "system_flow";
DROP TABLE "system_flow";
ALTER TABLE "new_system_flow" RENAME TO "system_flow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
