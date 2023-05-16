"use client";

import Image from "next/image";
import { Key, useEffect, useState } from "react";

export const Skill = (props: any) => {
  const [skillData, setSkillData] = useState<any>([]);
  const skillList = [
    [
      { id: 1111, level: 20 },
      { id: 2678, level: 20 },
      { id: 8485, level: 20 },
      { id: 964, level: 4 },
      { id: 6432, level: 0 },
    ],
    [
      { id: 5653, level: 4 },
      { id: 3964, level: 20 },
      { id: 9852, level: 20 },
      { id: 3721, level: 20 },
      { id: 1029, level: 20 },
    ],
    [
      { id: 0, level: 11 },
      { id: 1129, level: 20 },
      { id: 7661, level: 20 },
      { id: 690, level: 20 },
      { id: 6858, level: 20 },
    ],
    [
      { id: 0, level: 0 },
      { id: 2615, level: 4 },
      { id: 3494, level: 20 },
      { id: 7773, level: 0 },
      { id: 6451, level: 0 },
    ],
  ];

  useEffect(() => {
    setSkillData(skillList);
  }, []);

  const checkIsContainSkill = (skill: number) => skill !== 0;
  const displaySkillLevel = (level: number) =>
    level === 0 ? "" : level === 20 ? "MAX" : level;

  const onUpgrade = (skillId: number) => {
    const newSkillData = skillData.map((data: any) =>
      data.map((skill: any) =>
        skill.id === skillId ? { ...skill, level: skill.level + 1 } : skill
      )
    );
    setSkillData(newSkillData);
  };

  const onDowngrade = (skillId: number) => {
    const newSkillData = skillData.map((data: any) =>
      data.map((skill: any) =>
        skill.id === skillId ? { ...skill, level: skill.level - 1 } : skill
      )
    );
    setSkillData(newSkillData);
  };

  return (
    <div
      className={`mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-center`}
    >
      {skillData.map((data: { id: number; level: number }[]) =>
        data.map(
          (
            skill: { id: number; level: number },
            index: Key | null | undefined
          ) =>
            checkIsContainSkill(skill.id) ? (
              <a
                key={index}
                className="group relative rounded-lg border border-transparent px-1 py-0.5"
              >
                <h2 className={`text-3xl font-semibold`}>
                  <span
                    className="inline-block transition-transform translate-x-8 hover:scale-125 hover:cursor-pointer group-hover:translate-x-0 motion-reduce:transform-none ease-in-out duration-500 text-green-200"
                    onClick={() => onUpgrade(skill.id)}
                  >
                    +
                  </span>{" "}
                  <Image
                    className="inline-block relative z-10 transition-transform group-hover:scale-110 ease-in-out duration-500"
                    src={`/skill/${skill.id}.png`}
                    alt="skill"
                    width={40}
                    height={40}
                    priority
                    draggable={false}
                  />
                  <span className="absolute z-20 transition-transform group-hover:scale-110 -right-2.5 text-sm -translate-x-10 translate-y-5 drop-shadow-[1px_1px_3px_#FF0000] duration-250">
                    {displaySkillLevel(skill.level)}
                  </span>{" "}
                  <span
                    className="inline-block transition-transform -translate-x-8 hover:scale-125 hover:cursor-pointer group-hover:translate-x-0 motion-reduce:transform-none ease-in-out duration-500 text-red-200"
                    onClick={() => onDowngrade(skill.id)}
                  >
                    -
                  </span>
                </h2>
              </a>
            ) : (
              <span />
            )
        )
      )}
    </div>
  );
};
