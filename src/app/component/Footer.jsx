import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-Gray-100 w-[100%] h-[371px] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-medium cursor-pointer">
            Merry
            <span className="text-2xl text-Red-500 font-extrabold">Match</span>
          </p>
          <p className="text-Gray-700 font-semibold text-xl mt-5">
            New generation of online dating website for everyone
          </p>
          <hr className="w-[1120px] h-[2px] mt-8 mb-3 text-Gray-400" />
          <p className="text-sm text-Gray-600 font-medium">
            copyright ©2022 merrymatch.com All rights reserved
          </p>
          <div className="flex mt-3">
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
              <img
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/fb.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZmIuc3ZnIiwiaWF0IjoxNjk3Njg5OTU0LCJleHAiOjE3MjkyMjU5NTR9.1O6W_ovivvW_tU_ouCZqTLVUFHjzjOXY_V9QlizWfHM&t=2023-10-19T04%3A32%3A37.012Z"
                className="mr-2"
              />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <img
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/ig.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvaWcuc3ZnIiwiaWF0IjoxNjk3Njg5OTcyLCJleHAiOjE3MjkyMjU5NzJ9.mwWF954P0DpVXkIIRd7qDLxxuMcVRJz68Vt_HbZVn3A&t=2023-10-19T04%3A32%3A55.190Z"
                className="mr-2"
              />
            </Link>
            <Link
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidGgifQ%3D%3D%22%7D"
              target="_blank"
            >
              <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/tw.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvdHcuc3ZnIiwiaWF0IjoxNjk3NjkwMDAyLCJleHAiOjE3MjkyMjYwMDJ9._ApS3paV95dS1vVvX2LwvQVz0d-OJfwO06XFvFSbVc8&t=2023-10-19T04%3A33%3A25.280Z" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
