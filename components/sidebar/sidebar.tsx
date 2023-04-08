import { GlobalContext } from "@/context/context";
import Link from "next/link";
import React, { useContext, useRef } from "react";

const Sidebar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    globalState: { isMenuOpen },
    updateGlobalState,
  } = useContext(GlobalContext);

  return (
    <>
      <div
        ref={ref}
        className={`flex space-y-14 w-80 justify-center items-center bg-secondary top-0 bottom-0  fixed flex-col
          transition-all duration-500 ease-in-out z-50
            ${isMenuOpen ? "right-0" : "-right-80"}
            `}
      >
        <h2
          className="top-2 text-primary absolute right-2 text-6xl cursor-pointer animate-pulse"
          onClick={() => {
            updateGlobalState({ isMenuOpen: false });
          }}
        >
          <i className="bi bi-x"></i>
        </h2>
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#resume">Download Resume</Link>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out z-40 bg-black w-10/12 opacity-20 top-0 bottom-0 fixed 
      
        ${isMenuOpen ? "left-0" : "-left-full"}

      `}
      ></div>
    </>
  );
};

export default Sidebar;
