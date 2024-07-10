import "dotenv/config"

import { migrate } from "drizzle-orm/mysql2/migrator"
import { db, poolConn } from "./db"


await migrate(db, { migrationsFolder: './src/drizzle/migrations', migrationsTable: "__drizzle_migrations" })

await poolConn.end()