import "dotenv/config"

import { migrate } from "drizzle-orm/mysql2/migrator"
import { db, poolConn } from "./db"


await migrate(db, { migrationsFolder: './src/drizzle/migrations', migrationsTable: "_migrations" })

await poolConn.end()