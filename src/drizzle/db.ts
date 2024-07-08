import { drizzle } from "drizzle-orm/mysql2"
import mysql from "mysql2/promise"

import * as schema from "./schema"

export const poolConn = await mysql.createConnection({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME as string,
    port: Number(process.env.DB_PORT),
    ssl: {
        rejectUnauthorized: false
    }
})

export const db = drizzle(poolConn, { schema, mode: 'default' })