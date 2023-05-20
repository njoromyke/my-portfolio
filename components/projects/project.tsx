import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  project: {
    name: string;
    description: string;
    image: string;
    link: string;
    stack: string[];
  };
}

const Project = ({ project }: ProjectProps): JSX.Element => {
  return (
    <Link href={project.link} className="group bg-secondary rounded" key={project.name} target="_blank"
      rel="noopener noreferrer"
      aria-label="View Project"
    
    >
      <div className="aspect-h-1 px-2 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={project.image}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          loading="lazy"
          width={500}
          height={500}
        />
      </div>

      <h3 className="mt-1 p-2 text-lg font-medium text-primary">{project.name}</h3>

      <div className="flex flex-wrap space-x-2 text-sm font-medium pl-2">
        {project.stack.map((tech) => (
          <span key={tech} className="inline-flex items-center space-y-2 px-3 py-0.5 rounded-full mb-2  text-secondary bg-primary">
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-1 p-2 text-sm text-gray-800">{project.description}</p>

      <div className="p-2">
        <button className="bg-primary text-secondary px-2 py-2 rounded mt-4 w-36">
          View Project
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </Link>
  );
};

export default Project;
