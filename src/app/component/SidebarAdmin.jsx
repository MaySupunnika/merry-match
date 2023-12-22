"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SidebarAdmin() {
  const router = useRouter();
  const [complaintClick, setComplaintClick] = useState(false);
  const [packageClick, setPackageClick] = useState(false);

  const handlerComplaintClick = () => {
    setComplaintClick(true);
    setPackageClick(false);
    router.push("/admin/complaintList");
  };

  const handlerPackageClick = () => {
    setPackageClick(true);
    setComplaintClick(false);
    router.push("/admin/packageList");
  };

  return (
    <>
      <div className="w-[18%] bottom-0 border-Gray-400 border-r bg-white">
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-3xl font-semibold">
            Merry <span className="text-Red-500 font-bold">Match</span>
          </h2>
          <p className="text-Gray-700 mt-3">Admin Panel Control</p>
        </div>
        <div className="flex flex-col">
          <div
            className={`flex cursor-pointer py-6 w-full hover:bg-Gray-200 ${
              packageClick && "bg-Gray-200"
            } mt-12`}
            onClick={handlerPackageClick}
          >
            <img
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/package-pink.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvcGFja2FnZS1waW5rLnN2ZyIsImlhdCI6MTY5Nzk4NTQwOCwiZXhwIjoxNzI5NTIxNDA4fQ.bZjjGTQfr2wG8mc9BlYuvZKOv-9bOXpPmg_J-ARi_ZU&t=2023-10-22T14%3A36%3A50.093Z"
              className="ml-4"
            />
            <p className="font-extrabold text-Gray-800 ml-3">Merry Package</p>
          </div>
          <div
            className={`flex cursor-pointer py-6 w-full hover:bg-Gray-200 ${
              complaintClick && "bg-Gray-200"
            }`}
            onClick={handlerComplaintClick}
          >
            <img
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/complaint-pink.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvY29tcGxhaW50LXBpbmsuc3ZnIiwiaWF0IjoxNjk3OTg1Nzc3LCJleHAiOjE3Mjk1MjE3Nzd9.FFF339I1T7_Kxry7NR31lXe7jA5Q-_wcmFTLr0J7tWw&t=2023-10-22T14%3A42%3A58.369Z"
              className="ml-4"
            />
            <p className="font-extrabold text-Gray-800 ml-3">Complaint</p>
          </div>
          <div
            className="flex cursor-pointer py-6 w-full hover:bg-Gray-200 mt-[12rem] border-t border-Gray-400"
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/login`,
              })
            }
          >
            <img
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/logout-pink.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvbG9nb3V0LXBpbmsuc3ZnIiwiaWF0IjoxNjk3OTg1ODQxLCJleHAiOjE3Mjk1MjE4NDF9.98u-pjhxCfkB56bvRiBXDgErY2H21n79TT-yLqfxJH0&t=2023-10-22T14%3A44%3A03.150Z"
              className="ml-4"
            />
            <p className="font-extrabold text-Gray-800 ml-3">Log out</p>
          </div>
        </div>
      </div>
    </>
  );
}
