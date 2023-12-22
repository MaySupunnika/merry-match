import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const id = request.url.split("profile/")[1];
  try {
    const profileId = Number(id);
    const profileById = await prisma.users.findUnique({
      where: {
        id: profileId,
      },
    });
    // console.log(profileId);
    return NextResponse.json(profileById);
  } catch (error) {
    console.log("Error to GET profile by ID", error);
  }
}

export async function PUT(request) {
  try {
    const {
      name,
      date_of_birth,
      location,
      city,
      username,
      email,
      sexual_identity,
      sexual_preference,
      recial_preference,
      meeting_interests,
      hobbies_interests,
      about_me,
    } = await request.json();
    const id = request.url.split("profile/")[1];

    const profileId = Number(id);
    const checkProfile = await prisma.users.findUnique({
      where: { id: profileId },
    });
    if (!checkProfile) {
      console.log("Profile not found", error);
    }

    const updatedProfile = await prisma.users.update({
      where: { id: profileId },
      data: {
        name,
        date_of_birth,
        location,
        city,
        username,
        email,
        sexual_identity,
        sexual_preference,
        recial_preference,
        meeting_interests,
        hobbies_interests,
        about_me,
      },
    });
    return NextResponse.json({
      message: "updated profile successfully",
      updatedProfile,
    });
  } catch (error) {
    console.log("error updating profile", error);
  }
}

export async function DELETE(request) {
  const id = request.url.split("profile/")[1];
  try {
    const profileId = Number(id);
    const profileById = await prisma.users.delete({
      where: {
        id: profileId,
      },
    });
    // console.log(profileId);
    return NextResponse.json({
      message: "deleted profile successfully",
    });
  } catch (error) {
    console.log("Error to DELETE profile by ID", error);
  }
}
