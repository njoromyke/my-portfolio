import React, { useEffect, useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const year = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    ref.current?.classList.add("hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        ref.current?.classList.remove("hidden");
      } else {
        ref.current?.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-gray-100">
      <button
        ref={ref}
        onClick={handleScrollToTop}
        className="bg-primary text-secondary p-1 mb-1 mr-1 flex justify-center items-center rounded mt-4 w-12 fixed bottom-0 right-0"
      >
        <i className="bi bi-chevron-up"></i>
      </button>

      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center py-6">
          <div className="w-full flex  justify-center items-center">
            <div className="flex justify-center items-center">
              <h2 className="text-primary text-center">© {year}. All rights reserved. Michael Njoroge</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
