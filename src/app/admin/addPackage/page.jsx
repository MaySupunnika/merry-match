"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../../component/SidebarAdmin";
import Loading from "../../component/LoadingPage";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getSession } from "next-auth/react";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState("");
  const [icon, setIcon] = useState("");
  const [details, setDetails] = useState([""]); // สร้าง state เพื่อเก็บรายละเอียด
  const [selectIcon, setSelectIcon] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    limit: "",
    details: "",
  });

  const clickCreate = () => {
    const data = {
      name,
      limit,
      icon,
      details,
      userId: 2,
    };
    console.log("data to be sent to server:", data);
    try {
      axios
        .post("/api/package", data)
        .then((response) => console.log(response))
        .catch((error) => console.log("add package error from FE", error))
        .finally(() => router.push("/admin/packageList"));
    } catch (error) {
      console.log("add package error", error);
    }
  };

  const validateName = () => {
    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "required",
      }));
    } else if (!/^[ก-ฮa-zA-Z]+$/.test(name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must be only letters.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
  };

  const validateLimit = () => {
    if (!limit) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        limit: "required",
      }));
    } else if (!/^[0-9]+$/.test(limit)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        limit: "limit must be only numbers.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        limit: "",
      }));
    }
  };

  const clickRemoveIcon = () => {
    setIcon("");
    setSelectIcon(null);
  };

  const handlerIconChange = (e) => {
    const file = e.target.files[0];

    try {
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setIcon(objectUrl);
      }
    } catch (error) {
      console.log("error handling icon change", error);
    }
  };

  useEffect(() => {
    // console.log(icon);
  }, [icon]);

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
              Add Package
            </h4>
            <div className="flex items-center">
              <button
                className="w-[98px] h-[48px] rounded-full bg-Red-100 hover:bg-Red-500 hover:text-white text-Red-600 mr-4 font-semibold"
                onClick={onClickCancel}
              >
                Cancel
              </button>
              <button
                onClick={clickCreate}
                className="w-[98px] h-[48px] rounded-full bg-Red-500 hover:bg-Red-400 text-white font-semibold"
              >
                Create
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[85%] py-[3rem] rounded-xl bg-white border border-Gray-200 mt-10 mb-8 flex flex-col items-center">
              <div className="flex w-[85%] justify-between mb-8">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2">
                    Package name <span className="text-Red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      validateName();
                    }}
                    onBlur={() => {
                      validateName();
                    }}
                    className="w-[380px] h-[45px] bg-white border border-Gray-400 rounded-lg focus:outline-none focus:border-Purple-500 pl-3"
                  />
                  {errors.name && (
                    <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[15rem]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="limit" className="mb-2">
                    Merry limit <span className="text-Red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="limit"
                    name="limit"
                    value={limit}
                    onChange={(e) => {
                      setLimit(e.target.value);
                      validateLimit();
                    }}
                    onBlur={() => {
                      validateLimit();
                    }}
                    className="w-[380px] h-[45px] bg-white border border-Gray-400 rounded-lg focus:outline-none focus:border-Purple-500 pl-3"
                  />
                  {errors.limit && (
                    <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[15rem] right-[30.5rem]">
                      {errors.limit}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-[85%]">
                <label htmlFor="text">
                  Icon <span className="text-Red-500">*</span>
                </label>
                {icon && icon.length > 0 ? (
                  <>
                    <div className="w-[120px] h-[120px] rounded-xl relative">
                      <img
                        src={icon}
                        className="w-[120px] h-[120px] rounded-xl bg-cover object-center"
                      />
                    </div>
                    <div
                      onClick={clickRemoveIcon}
                      className="cursor-pointer bg-Red-500 w-[1.3rem] h-[1.3rem] rounded-full text-white font-bold text-xl absolute top-[18.3rem] left-[29.5rem] flex justify-center items-center"
                    >
                      -
                    </div>
                  </>
                ) : (
                  <label className="mt-2 w-[120px] h-[120px] bg-Gray-200 text-sm text-Purple-600 rounded-xl flex flex-col items-center justify-center cursor-pointer">
                    <span className="text-3xl text-Purple-600">+</span>
                    Upload icon
                    <input
                      id="upload"
                      type="file"
                      onChange={handlerIconChange}
                      className="hidden"
                    />
                  </label>
                )}
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
                        value={details}
                        onChange={(e) => {
                          const newDetail = [...details];
                          newDetail[index] = e.target.value;
                        }}
                        //ยังไม่เสร็จ
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
