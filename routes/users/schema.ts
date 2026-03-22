import { sqliteTable, text, integer } from "../../src/db/schema.ts";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: text("created_at").default("current_timestamp"),
});
