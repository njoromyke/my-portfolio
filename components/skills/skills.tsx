import { skills } from "@/helpers/constants";
import Image from "next/image";
import React from "react";
import Skill from "./skill";

const Skills = () => {
  return (
    <div className="bg-gray-300 w-full py-16">
      <h2 className="text-4xl text-center mb-8 text-primary">Skills</h2>

      <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
        <div className="w-full flex justify-center items-center lg:p-6 lg:w-1/2">
          <Image src={"/skill-1.png"} width={400} height={400} alt="Skills" />
        </div>
        <div className="w-full lg:p-6 lg:w-1/2">
          <div className="flex flex-row flex-wrap justify-start space-x-4 bg-slate-50 rounded shadow-sm">
            {skills.map((skill) => (
              <Skill key={skill.name} level={skill.level} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
