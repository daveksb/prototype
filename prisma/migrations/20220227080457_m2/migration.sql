/*
  Warnings:

  - You are about to drop the column `service_id` on the `Approval` table. All the data in the column will be lost.
  - You are about to drop the column `approval_id` on the `system_flow` table. All the data in the column will be lost.
  - Added the required column `approval_id` to the `ServiceData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_id` to the `system_flow` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Approval" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "approver" TEXT NOT NULL
);
INSERT INTO "new_Approval" ("approver", "id") SELECT "approver", "id" FROM "Approval";
DROP TABLE "Approval";
ALTER TABLE "new_Approval" RENAME TO "Approval";
CREATE TABLE "new_ServiceData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "details" TEXT NOT NULL,
    "approval_id" TEXT NOT NULL
);
INSERT INTO "new_ServiceData" ("details", "id") SELECT "details", "id" FROM "ServiceData";
DROP TABLE "ServiceData";
ALTER TABLE "new_ServiceData" RENAME TO "ServiceData";
CREATE TABLE "new_system_flow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flow_name" TEXT NOT NULL,
    "flow_order" INTEGER NOT NULL,
    "page" TEXT NOT NULL,
    "service_id" TEXT NOT NULL
);
INSERT INTO "new_system_flow" ("flow_name", "flow_order", "id", "page") SELECT "flow_name", "flow_order", "id", "page" FROM "system_flow";
DROP TABLE "system_flow";
ALTER TABLE "new_system_flow" RENAME TO "system_flow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
