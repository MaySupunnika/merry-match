import React from "react";
import Sidebar from "../../component/SidebarAdmin";

export default function page() {
  return (
    <>
      <div className="w-full flex bg-main">
        <Sidebar />
        <p className="text-Red-500 text-2xl">
          This is complaint list for admin
        </p>
      </div>
    </>
  );
}
