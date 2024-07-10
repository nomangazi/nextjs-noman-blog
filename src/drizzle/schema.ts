import { bigint, boolean, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";


// user table
export const user = mysqlTable('user', {
    id: serial("id").primaryKey(),
    fullName: varchar("fullName", { length: 255 }).notNull().default(""),
    firstName: varchar("firstName", { length: 255 }).notNull().default(""),
    lastName: varchar("lastName", { length: 255 }).notNull().default(""),
    username: varchar("username", { length: 255 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    phone: varchar("phone", { length: 255 }).notNull().unique(),
    photo_url: varchar("photo_url", { length: 1000 }).notNull().default(""),
    password: varchar("password", { length: 255 }).notNull().default(""),
    role: varchar("role", { length: 20, enum: ['super_admin', 'admin', 'manager', 'author', 'user'] }).notNull().default("user"),
    status: varchar("status", { length: 20, enum: ['active', 'inactive'] }).notNull().default("active"),
    address: varchar("address", { length: 500 }).notNull().default(""),
    isVerified: boolean("isVerified").notNull().default(false),
    ipLong: bigint("ipLong", { mode: "number" }).default(0),
    creator: bigint("creator", { mode: "number" }).default(0),
    timeCreated: bigint("timeCreated", { mode: "number" }).default(0),
    timeUpdated: bigint("timeUpdated", { mode: "number" }).default(0),
    timeDeleted: bigint("timeDeleted", { mode: "number" }).default(1),
})