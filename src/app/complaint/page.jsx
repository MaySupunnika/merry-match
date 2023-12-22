"use client";

import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function page() {
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const { data: session } = useSession();
  const [success, setSuccess] = useState(false);

  const handlerSubmit = async () => {
    const userId = session.user.id;
    const complaintData = {
      issue: issue,
      description: description,
      userId: userId,
    };
    try {
      axios.post("/api/complaint", complaintData);
      console.log("The complaint has been successfully", complaintData);

      setSuccess(true);
      setIssue("");
      setDescription("");

      setTimeout(() => {
        setSuccess(false);
      }, 1500);
    } catch (error) {
      console.log("Error to sent the complaint", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-main w-full flex justify-center items-center pt-[9rem]">
        <div className="w-[548px]">
          <div className="flex flex-col">
            <p className="text-Beige-700 text-sm font-semibold">COMPLAINT</p>
            <h2 className="text-Purple-500 font-extrabold text-[46px] leading-[3rem]">
              If you have any trouble Don't be afraid to tell us!
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="text" className="mt-14 mb-2">
              Issue
            </label>
            <textarea
              className="border border-Gray-400 bg-white rounded-xl pl-3 py-2 w-full h-[48px] resize-none focus:border-Purple-500 focus:outline-none"
              placeholder="Issue..."
              type="text"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
            <label htmlFor="text" className="mt-6 mb-2">
              Description
            </label>
            <textarea
              className="border border-Gray-400 bg-white rounded-xl pl-3 pt-2 w-full h-[196px] resize-none focus:border-Purple-500 focus:outline-none"
              placeholder="Description..."
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              type="submit"
              onClick={handlerSubmit}
              className="w-[102px] h-[48px] rounded-full bg-Red-500 mt-14 mb-[10rem] text-white font-bold hover:bg-Red-400"
            >
              Submit
            </button>
          </div>
          {success && (
            <p className="absolute top-[44.5rem] left-[18rem] text-lg text-Red-500 font-bold">
              ❤ Thank you for your feedback ❤
            </p>
          )}
        </div>
        <div className="w-[330px] h-[537px] ml-[8rem]">
          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/img-login.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvaW1nLWxvZ2luLnN2ZyIsImlhdCI6MTY5NzgxNDY5NCwiZXhwIjoxNzI5MzUwNjk0fQ.SXnHpZMiTm0Ax7sOcOq6VdD5zFkjjMaDTMkpknwj4so&t=2023-10-20T15%3A11%3A34.558Z" />
        </div>
      </div>
      <Footer />
    </>
  );
}
