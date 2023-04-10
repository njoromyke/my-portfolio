import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { DEFAULT_GLOBAL_STATE, GlobalContext } from "@/context/context";
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

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
        <Sidebar />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </GlobalContext.Provider>
  );
}
