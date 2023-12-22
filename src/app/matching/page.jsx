"use client";

import React from "react";
import SidebarUser from "../component/SidebarUser";
import Navbar from "../component/Navbar";
import SearchByKeyword from "../component/SearchByKeyword";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex pt-[88px] overflow-hidden">
        <SidebarUser />
        <div className="w-[65%] bg-utility h-screen"></div>
        <SearchByKeyword />
      </div>
    </>
  );
}
