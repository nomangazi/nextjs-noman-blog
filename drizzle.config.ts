import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    out: "./src//drizzle/migrations",
    dialect: "mysql",
    dbCredentials: {
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME as string,
        port: 3306
    },
    verbose: true,
    strict: true
})