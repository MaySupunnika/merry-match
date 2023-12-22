import prisma from "../../lib/prisma.ts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const profile = await prisma.users.findMany();
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json("Error to GET profile", error);
  }
}
