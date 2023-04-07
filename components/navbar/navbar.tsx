import Link from "next/link";
import React, { useRef } from "react";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {

  }



  return (
    <div className="mx-auto sticky top-0 shadow-sm bg-primary text-secondary">
      <div className="mx-auto sticky top-0 shadow-sm">
        <div className="flex justify-between py-4 px-4 flex-row-reverse md:flex-row">
          <h2 className="text-3xl uppercase font-bold">Home</h2>
          <div className="flex space-y-1 border p-2 rounded flex-col text-secondary md:hidden">
            <span className="h-1 w-6 bg-secondary"></span>
            <span className="h-1 w-6 bg-secondary"></span>
            <span className="h-1 w-6 bg-secondary"></span>
          
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/">Home</Link>
            <Link href="/">Projects</Link>
            <Link href="/">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
