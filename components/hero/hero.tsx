/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-[89vh] text-secondary mx-auto p-6">
      <div className="flex mt-24">
        <div className="w-1/2 flex justify-between flex-col">
          <h1 className="text-7xl font-bold mb-4">
            Hey, I'm <span className="text-gray-300">Michael Njoroge</span>
          </h1>
          <h2 className="text-lg">
            A fullstack software engineer with a passion for building scalable and performant web applications.
          </h2>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 mt-4 rounded">Button</button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image src={"/mike.png"} width={300} height={300} alt="Mike" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
