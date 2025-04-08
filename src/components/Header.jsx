import React from "react";

function Header() {
  return (
    <>
      <div className="flex w-full bg-white border-b-2 h-[12vh] justify-center items-center gap-10 fixed top-0">
        <img src="logo.png" alt="Logo" className="w-16" />
        <h1 className="font poppins-extrabold-italic text-3xl">WebhookNest</h1>
      </div>
    </>
  );
}

export default Header;
