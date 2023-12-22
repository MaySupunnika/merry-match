import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const id = request.url.split("complaint/")[1];
  try {
    const complaintId = Number(id);
    const complaintById = await prisma.complaints.findUnique({
      where: {
        id: complaintId,
      },
    });
    // console.log(complaintId);
    return NextResponse.json(complaintById);
  } catch (error) {
    console.log("Error to GET complaint by ID", error);
  }
}
