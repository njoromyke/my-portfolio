import React from "react";

interface SkillProps {
  name: string;
  level: number;
}

const Skill = ({ level, name }: SkillProps) => {
  return (
    <div className="flex justify-between items-center p-4 space-x-6">
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="flex space-x-2">
        {Array.from({ length: level }, (_, i) => (
          <>
            <div key={i} className="w-4 h-4 bg-primary rounded-full"></div>
          </>
        ))}
        {Array.from({ length: 5 - level }, (_, i) => (
            <>
                <div key={i} className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </>
        ))}
        
      </div>
    </div>
  );
};

export default Skill;
