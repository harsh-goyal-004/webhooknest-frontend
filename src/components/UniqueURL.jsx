import React, { useRef, useState } from "react";

function UniqueURL({ uniqueURL }) {
  const inputRef = useRef(null);

  // Copy URL To Clickboard
  function copyToClickboard() {
    navigator.clipboard.writeText(uniqueURL);
    inputRef.current.select();
  }

  return (
    <>
      <div className="w-full h-18 flex items-center px-4">
        <div className="w-6/8 border h-10 flex items-center justify-center rounded-l-xl  ">
          <input
            type="text"
            value={uniqueURL || ""}
            ref={inputRef}
            readOnly
            className="text-[16px] w-full text-center outline-none"
          />
        </div>
        <button
          className=" h-10 w-2/8 flex justify-center items-center gap-1 rounded-r-lg bg-purple-400 text-white border border-purple-400"
          onClick={copyToClickboard}
        >
          <img src="copy.svg" alt="copy" />
          <span className="font-medium text-md">COPY</span>
        </button>
      </div>
    </>
  );
}

export default UniqueURL;
