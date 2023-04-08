import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { useRef, useState } from "react";
import { DEFAULT_GLOBAL_STATE, GlobalContext } from "@/context/context";

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [globalState, setGlobalState] = useState(DEFAULT_GLOBAL_STATE);

  const updateGlobalState = (obj: any) => {
    setGlobalState((prevState) => ({ ...prevState, ...obj }));
  };

  console.log(globalState);

  return (
    <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
      <div className="relative">
        <Navbar />
        <div
          ref={ref}
          className={`flex space-y-14 w-80 justify-center items-center bg-secondary top-0 bottom-0  fixed flex-col
          transition-all duration-500 ease-in-out z-50
            ${globalState.isMenuOpen ? "right-0" : "-right-80"}
            `}
        >
          <h2
            className="top-2 text-primary absolute right-2 text-6xl cursor-pointer"
            onClick={() => {
              updateGlobalState({ isMenuOpen: false });
            }}
          >
            <i className="bi bi-x"></i>
          </h2>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#about">About</Link>
          <Link href="/#resume">Download Resume</Link>
          <Link href="/#skills">Skills</Link>
        </div>

        <Component {...pageProps} />
      </div>
    </GlobalContext.Provider>
  );
}
