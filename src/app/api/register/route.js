import prisma from "@/src/app/lib/prisma";
import bcrypt, { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      username,
      email,
      password,
      date_of_birth,
      location,
      city,
      sexual_identity,
      sexual_preference,
      recial_preference,
      meeting_interests,
      hobbies_interests,
      profile_image,
    } = body;

    const existingUserByEmail = await prisma.users.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.users.create({
      data: {
        name: name,
        username: username,
        email: email,
        password: hashedPassword,
        date_of_birth: date_of_birth,
        location: location,
        city: city,
        sexual_identity: sexual_identity,
        sexual_preference: sexual_preference,
        recial_preference: recial_preference,
        meeting_interests: meeting_interests,
        hobbies_interests: hobbies_interests,
        profile_image: profile_image,
      },
    });

    return NextResponse.json(
      { user: newUser, message: "User register successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error registering user", error);
    return NextResponse.error({ error: "Failed to register" }, { status: 500 });
  }
}
