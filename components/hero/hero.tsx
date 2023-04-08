/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-[90-vh] text-secondary mx-auto p-6 mb-9">
      <div className="flex mt-24  flex-col-reverse lg:flex-row">
        <div className="w-full flex justify-center flex-col lg:w-1/2 lg:justify-between">
          <h1 className="text-2xl font-bold mb-4 md:text-6xl lg:text-7xl">
            Hey, I'm <span className="text-gray-300">Michael Njoroge</span>
          </h1>
          <h2 className="text-lg">
            A fullstack software engineer with a passion for building scalable and performant web applications.
          </h2>
          <div className="flex space-x-4 mt-4">
            <Link
              target="_blank"
              href="https://github.com/njoromyke"
              className="h-10 w-10 bg-secondary text-primary flex justify-center items-center transition-all duration-500 ease-in-out rounded hover:rotate-45"
            >
              <i className="text-lg bi bi-github"></i>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/njoromyke"
              className="h-10 w-10 bg-secondary text-blue-600 flex justify-center items-center transition-all duration-500 ease-in-out rounded hover:rotate-45"
            >
              <i className="text-lg bi bi-linkedin"></i>
            </Link>
            <Link
              target="_blank"
              href="https://wa.me/254729842998"
              className="h-10 w-10 bg-secondary text-green-600 flex justify-center items-center  transition-all duration-500 ease-in-out rounded hover:rotate-45"
            >
              <i className="text-lg bi bi-whatsapp"></i>
            </Link>
            <Link
              target="_blank"
              href="mailto:mykenjoroge01@gmail.com"
              className="h-10 w-10 bg-secondary text-red-600 flex justify-center items-center  transition-all duration-500 ease-in-out rounded hover:rotate-45"
            >
              <i className="text-lg bi bi-envelope-at"></i>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mb-6 relative lg:w-1/2">
          <Image src={"/mike.png"} width={300} height={300} alt="Mike" className="border-r-8 border-b-8 border-secondary" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
