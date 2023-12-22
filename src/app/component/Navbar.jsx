"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";
import { signOut, useSession } from "next-auth/react";
import Loading from "../component/LoadingPage";

export default function Navbar() {
  const router = useRouter();
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const switchToggle = () => {
    setIsOpenToggle(!isOpenToggle);
    setIsOpenNotification(false);
  };

  const switchNotification = () => {
    setIsOpenNotification(!isOpenNotification);
    setIsOpenToggle(false);
  };

  const handlerLogout = () => {
    setLoading(true);
    signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/login`,
    });
  };

  const onClickComplaint = () => {
    setLoading(true);
    router.push("/complaint");
  };

  const onClickStartMatching = () => {
    setLoading(true);
    router.push("/matching");
  };

  const onClickProfile = () => {
    setLoading(true);
    router.push("/profile");
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="fixed left-0 top-0 right-0 z-10">
        <div className="h-[88px] flex justify-between px-[8rem] shadow-md bg-white">
          <p
            className="text-2xl font-medium flex items-center cursor-pointer hover:scale-110 duration-300"
            onClick={() => router.push("/")}
          >
            Merry
            <span className="text-2xl text-Red-500 font-extrabold">Match</span>
          </p>
          {session?.user ? (
            <>
              <div className="flex items-center">
                <p
                  className="text-Purple-800 font-bold px-6 py-8 cursor-pointer hover:text-Red-600"
                  onClick={onClickStartMatching}
                >
                  Start Matching!
                </p>
                <p className="text-Purple-800 font-bold px-6 py-8 mr-5 cursor-pointer hover:text-Red-600">
                  Merry Membership
                </p>
                <button onClick={switchNotification}>
                  <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/bell-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvYmVsbC1pY29uLnN2ZyIsImlhdCI6MTY5NzczMjEzNCwiZXhwIjoxNzI5MjY4MTM0fQ.CndBu0vBslT6ENM1e9ZieOyA-WibN_knBULiexeANA0&t=2023-10-19T16%3A15%3A34.848Z" />
                </button>
                {isOpenNotification ? (
                  <>
                    <div className="absolute top-[5rem] right-[12rem] w-[251px] h-[214px] bg-white rounded-xl shadow-2xl"></div>
                  </>
                ) : (
                  ""
                )}
                <img
                  className="w-[48px] h-[48px] rounded-full ml-5 cursor-pointer"
                  onClick={switchToggle}
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/example-profile?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZXhhbXBsZS1wcm9maWxlIiwiaWF0IjoxNjk3NzMxNTczLCJleHAiOjE3MjkyNjc1NzN9.5meAjf6pQe9GpWr7octIXmdwm7mATkqYTrVk6yVWxVc&t=2023-10-19T16%3A06%3A13.702Z"
                />
                {isOpenToggle ? (
                  <>
                    <div className="w-[198px] h-[258px] absolute top-[5rem] right-0 bg-white rounded-xl shadow-2xl">
                      <div className="flex flex-col items-center py-3">
                        <button className="w-[179px] h-[41px] rounded-full bg-gradient-to-r from-[#742138] to-[#A878BF] flex justify-center items-center font-medium text-white hover:font-bold">
                          <img
                            className="mr-1"
                            src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/shiny-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvc2hpbnktaWNvbi5zdmciLCJpYXQiOjE2OTc3MzI4NTgsImV4cCI6MTcyOTI2ODg1OH0.pFZO6Z22QcToTijWYrgWCmW9miX-Lzu2-MQyG4Oa7Zg&t=2023-10-19T16%3A27%3A39.100Z"
                          />
                          More limit Merry!
                        </button>
                        <div
                          className="h-[37px] w-full flex items-center pl-3 hover:bg-Purple-100 mt-3 cursor-pointer"
                          onClick={onClickProfile}
                        >
                          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/profile-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvcHJvZmlsZS1pY29uLnN2ZyIsImlhdCI6MTY5NzczMzM2OCwiZXhwIjoxNzI5MjY5MzY4fQ.d4z8MmZC4fc19sFl58uYXhhye0dO-Oxsac1cF5uF0hk&t=2023-10-19T16%3A36%3A08.567Z" />
                          <p className="text-Gray-700 font-medium ml-4">
                            Profile
                          </p>
                        </div>
                        <div className="h-[37px] w-full flex items-center pl-3 hover:bg-Purple-100 cursor-pointer">
                          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/heart-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvaGVhcnQtaWNvbi5zdmciLCJpYXQiOjE2OTc3MzQwNjQsImV4cCI6MTcyOTI3MDA2NH0.Ei1LTrFwWPhu2oTxhe76331mOsZbwwVT14rHlUkT2Vw&t=2023-10-19T16%3A47%3A44.485Z" />
                          <p className="text-Gray-700 font-medium ml-4">
                            Merry list
                          </p>
                        </div>
                        <div className="h-[37px] w-full flex items-center pl-3 hover:bg-Purple-100 cursor-pointer">
                          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/box-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvYm94LWljb24uc3ZnIiwiaWF0IjoxNjk3NzM0MDg2LCJleHAiOjE3MjkyNzAwODZ9.QLMzMCDiAdD1f423POcKS597v5gYdAxr0IAzxaaY9NU&t=2023-10-19T16%3A48%3A07.100Z" />
                          <p className="text-Gray-700 font-medium ml-4">
                            Merry Membership
                          </p>
                        </div>
                        <div
                          className="h-[37px] w-full flex items-center pl-3 hover:bg-Purple-100 cursor-pointer"
                          onClick={onClickComplaint}
                        >
                          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/triangle-error-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvdHJpYW5nbGUtZXJyb3ItaWNvbi5zdmciLCJpYXQiOjE2OTc3MzQxMTIsImV4cCI6MTcyOTI3MDExMn0._GryYAsgKCjhmMwnwBM29r9To3D3OImVPx3vPCciTvU&t=2023-10-19T16%3A48%3A32.870Z" />
                          <p className="text-Gray-700 font-medium ml-4">
                            Compliant
                          </p>
                        </div>
                        <div
                          className="h-[41px] w-full flex items-center pl-3 hover:bg-Purple-100 mt-1 border-t-[1px] border-Gray-200 rounded-b-xl cursor-pointer"
                          onClick={handlerLogout}
                        >
                          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/logout-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvbG9nb3V0LWljb24uc3ZnIiwiaWF0IjoxNjk3NzM0Mjg4LCJleHAiOjE3MjkyNzAyODh9.jWZ2eD2Y82oKJ5S2QUg1_zlth9058slg2fgS_hYPHHE&t=2023-10-19T16%3A51%3A28.999Z" />
                          <p className="text-Gray-700 font-medium ml-4">
                            Log out
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <Link to="whyMerry" smooth={true}>
                  <p className="text-Purple-800 font-bold px-6 py-8 cursor-pointer hover:text-Red-600">
                    Why Merry Match?
                  </p>
                </Link>
                <Link to="howToMerry" smooth={true}>
                  <p className="text-Purple-800 font-bold px-6 py-8 cursor-pointer hover:text-Red-600">
                    How to Merry
                  </p>
                </Link>
                <button
                  className="bg-Red-500 text-white font-bold w-[90px] h-[48px] rounded-3xl hover:bg-Red-600 "
                  type="button"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
