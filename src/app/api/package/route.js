import prisma from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { icon, name, limit, userId } = body;

  try {
    const packageData = await prisma.packages.create({
      data: {
        icon,
        name,
        limit,
        userId,
      },
    });
    return NextResponse.json(packageData);
  } catch (error) {
    console.log("Error creating package", error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const packageData = await prisma.packages.findMany();
    return NextResponse.json(packageData);
  } catch (error) {
    return NextResponse.json("Error to GET package", error);
  }
}

export async function DELETE(req) {
  const body = await req.json();
  const { id, userId } = body;
  try {
    const deletePackage = await prisma.packages.delete({
      where: {
        id: id,
        userId: userId,
      },
    });
    return NextResponse.json(deletePackage);
  } catch (error) {
    return NextResponse.json("Error to GET package", error);
  }
}
