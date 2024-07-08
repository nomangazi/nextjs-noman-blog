import { db } from "@/drizzle/db"
import { user } from "@/drizzle/schema"
import { NextResponse } from "next/server"



export const GET = async () => {
    try {
        const blogs = await db.select().from(user)

        console.log(blogs)

        return NextResponse.json({ "message": "ok" }, { status: 200, statusText: "ok" })
    } catch (ex: any) {
        return NextResponse.json({ "message": ex.message }, { status: 200 })
    }
}