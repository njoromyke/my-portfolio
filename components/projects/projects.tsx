import { projects } from "@/helpers/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project from "./project";

const Projects = () => {
  return (
    <div className="py-16 text-secondary px-6 container mx-auto" id="projects">
      <h2 className="text-4xl text-center mb-8 text-secondary">My Portfolio</h2>
      <p className="text-center text-lg text-gray-300 p-0 m-0">Here are some of my projects that I have worked on.</p>
      <div className="grid grid-cols-1 mt-3 gap-x-6  gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <p className="text-lg text-gray-300 p-0 m-0">
          This is just a small sample of my work. For the other works I have signed an NDA with the clients and so it is not
          possible to share them publicly.
        </p>
      </div>
    </div>
  );
};

export default Projects;
