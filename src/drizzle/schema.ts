import { bigint, boolean, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";


// user table
export const user = mysqlTable('user', {
    id: serial("id").primaryKey(),
    full_name: varchar("name", { length: 255 }).notNull().default(""),
    username: varchar("username", { length: 255 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    phone: varchar("phone", { length: 255 }).notNull().unique(),
    photo_url: varchar("photo_url", { length: 1000 }).notNull().default(""),
    password: varchar("password", { length: 500 }).notNull().default(""),
    role: varchar("role", { length: 255 }).notNull().default(""),
    status: varchar("is_active", { length: 255, enum: ['active', 'inactive', 'suspend'] }).notNull().default("active"),
    is_verified: boolean("is_verified").notNull().default(false),
    time_created: bigint("time_created", { mode: "number" }),
    time_updated: bigint("time_updated", { mode: "number" }),
    time_deleted: bigint("time_deleted", { mode: "number" })
})