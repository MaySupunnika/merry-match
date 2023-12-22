"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../../component/SidebarAdmin";
import Loading from "../../component/LoadingPage";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]); // สร้าง state เพื่อเก็บรายละเอียด

  const onClickCancel = () => {
    setLoading(true);
    router.push("/admin/packageList");
  };

  const onClickAdd = () => {
    // เพิ่มรายละเอียดใหม่เข้าไปในรายการ
    setDetails([...details, ""]);
  };

  const onClickDeleteDetail = (index) => {
    if (details.length > 1) {
      const newDetails = [...details];
      newDetails.splice(index, 1);
      setDetails(newDetails);
    }
  };

  useEffect(() => {
    setDetails([""]);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full flex bg-main">
        <Sidebar />
        <div className="flex flex-col w-[100%]">
          <div className="bg-white h-[80px] flex justify-around">
            <h4 className="h-full font-semibold text-2xl w-[852px] flex items-center">
              <span className="mr-6 cursor-pointer" onClick={onClickCancel}>
                🡠
              </span>
              Edit Package
            </h4>
            <div className="flex items-center">
              <button
                className="w-[98px] h-[48px] rounded-full bg-Red-100 hover:bg-Red-200 text-Red-600 mr-4 font-semibold"
                onClick={onClickCancel}
              >
                Cancel
              </button>
              <button className="w-[98px] h-[48px] rounded-full bg-Red-500 hover-bg-Red-400 text-white font-semibold">
                Create
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[85%] py-[3rem] rounded-xl bg-white border border-Gray-200 mt-10 mb-8 flex flex-col items-center">
              <div className="flex w-[85%] justify-between mb-8">
                <div className="flex flex-col">
                  <label htmlFor="text" className="mb-2">
                    Package name <span className="text-Red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-[380px] h-[45px] bg-white border border-Gray-400 rounded-lg focus:outline-none focus:border-Purple-500 pl-3"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="text" className="mb-2">
                    Merry limit <span className="text-Red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-[380px] h-[45px] bg-white border border-Gray-400 rounded-lg focus:outline-none focus:border-Purple-500 pl-3"
                  />
                </div>
              </div>
              <div className="w-[85%]">
                <label htmlFor="text">
                  Icon <span className="text-Red-500">*</span>
                </label>
                <img
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/upload-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvdXBsb2FkLWljb24uc3ZnIiwiaWF0IjoxNjk4MTYxMTE5LCJleHAiOjE3Mjk2OTcxMTl9.KoX6ovujegz6ihgj2b3hgYDqqcx3J5pjMeiub2baHpc&t=2023-10-24T15%3A25%3A19.378Z"
                  className="mt-2 cursor-pointer"
                />
              </div>
              <hr className="h-[1px] text-Gray-400 w-[85%] mt-8 mb-10" />
              <p className="text-Gray-700 text-xl font-semibold w-[85%] mb-8">
                Package Detail
              </p>
              <div className="flex flex-col w-[85%]">
                {details.map((detail, index) => (
                  <div key={index} className="mb-4">
                    <label htmlFor="text">
                      Detail <span className="text-Red-500">*</span>
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        className="mt-2 w-[710px] h-[45px] bg-white border border-Gray-400 rounded-lg focus:outline-none focus:border-Purple-500 pl-3"
                      />
                      <button
                        className="ml-6 text-Gray-500 font-bold hover:text-Red-500"
                        onClick={() => onClickDeleteDetail(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  className="h-[48px] w-[140px] mt-8 rounded-full bg-Red-100 hover:bg-Red-200 text-Red-600 font-semibold"
                  onClick={onClickAdd}
                >
                  + Add detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
