import { db } from "@/drizzle/db"
import { user } from "@/drizzle/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"



export const GET = async () => {
    try {
        const blogs = await db.select().from(user).where(eq(user.time_deleted, 1))

        console.log(blogs)

        return NextResponse.json({ error: 0, message: "List of Blog", data: blogs }, { status: 200 })
    } catch (ex: any) {
        return NextResponse.json({ "message": ex.message }, { status: 200 })
    }
}