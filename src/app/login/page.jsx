"use client";

import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import Loading from "../component/LoadingPage";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlerSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (response?.error) {
        console.log("response signin error", response.error);
      } else {
        const session = await getSession();
        // setLoading(false);
        if (session?.user) {
          if (session.user.role === "user") {
            router.push("/");
          } else if (session.user.role === "admin") {
            router.push("/admin/packageList");
          }
        }
      }
      console.log(response);
    } catch (error) {
      console.log("Login error!!!", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalid").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const clickRegister = () => {
    setLoading(true);
    router.push("/register");
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="bg-main flex justify-center pt-[6rem] w-screen">
        <img
          src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/circle-login.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvY2lyY2xlLWxvZ2luLnN2ZyIsImlhdCI6MTY5NzY4OTU2MiwiZXhwIjoxNzI5MjI1NTYyfQ.tgDRCAnsmEiRSOp24-H5mWdFDCbsE3Y_9UrHM2uteTU&t=2023-10-19T04%3A26%3A05.233Z"
          className="relative left-[-10rem] top-[-10rem]"
        />
        <div className="w-[330px] h-[537px]">
          <img
            src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/img-login.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvaW1nLWxvZ2luLnN2ZyIsImlhdCI6MTY5Nzk3MzM0NSwiZXhwIjoxNzI5NTA5MzQ1fQ.dIUMbn462jvMG6pd4HXtXfW8LO_sjJGJXzzTVXNNiv4&t=2023-10-22T11%3A15%3A46.744Z"
            className="mt-[3rem]"
          />
        </div>
        <div className="w-[453px] ml-[10rem] mt-[5rem]">
          <p className="text-[#7B4429] text-xs font-semibold mb-3">LOGIN</p>
          <h2 className="text-5xl font-extrabold text-Purple-500 mb-6">
            Welcome back to Merry Match
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handlerSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="relative mb-6">
                  <label htmlFor="email">Email</label>
                  <br />
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    className={`py-3 pr-4 px-3 border border-[1px] border-Gray-400 rounded-xl w-[100%] focus:outline-none  focus:border-Purple-500 ${
                      errors.email && touched.email
                        ? "border-Red-600 border-1"
                        : ""
                    }`}
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-Red-600 text-xs absolute pl-2"
                  />
                  {errors.email && touched.email ? (
                    <img
                      src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/error-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZXJyb3ItaWNvbi5zdmciLCJpYXQiOjE2OTc1NDQyNDQsImV4cCI6MTcyOTA4MDI0NH0.UAF89Hy-GHqQMuVabil7ZIJJ_5EWW-jvwm9Ci41eWv8&t=2023-10-17T12%3A04%3A05.568Z"
                      alt="errorIcon"
                      className="absolute top-[56%] right-[3%]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="password">Password</label>
                  <br />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className={`py-3 pr-4 px-3 border border-[1px] border-Gray-400 rounded-xl w-[100%] focus:outline-none focus:border-Purple-500 ${
                      errors.password && touched.password
                        ? "border-Red-600 border-1"
                        : ""
                    }`}
                  />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-Red-600 text-xs absolute pl-2"
                  />
                  {errors.password && touched.password ? (
                    <img
                      src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/error-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZXJyb3ItaWNvbi5zdmciLCJpYXQiOjE2OTc1NDQyNDQsImV4cCI6MTcyOTA4MDI0NH0.UAF89Hy-GHqQMuVabil7ZIJJ_5EWW-jvwm9Ci41eWv8&t=2023-10-17T12%3A04%3A05.568Z"
                      alt="errorIcon"
                      className="absolute top-[56%] right-[3%]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <button
                  className="w-[100%] bg-Red-600 rounded-full py-2 text-white font-bold mt-8 hover:bg-Red-400"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <p className="mt-4">
            Don’t have an account?
            <span
              className="font-bold text-Red-500 ml-2 cursor-pointer"
              onClick={clickRegister}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
