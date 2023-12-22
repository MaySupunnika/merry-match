import prisma from "../../lib/prisma.ts";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { issue, description, userId } = body;

  try {
    const complaint = await prisma.complaints.create({
      data: {
        issue,
        description,
        userId,
      },
    });
    return NextResponse.json(complaint);
  } catch (error) {
    console.log("Error creating complaint", error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const complaint = await prisma.complaints.findMany();
    return NextResponse.json(complaint);
  } catch (error) {
    return NextResponse.json("Error to GET complaint", error);
  }
}
