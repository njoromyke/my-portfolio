import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
    </>
  );
}
