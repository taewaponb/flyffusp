"use client";

import Image from "next/image";
import { Key, useEffect, useState } from "react";

const commonStyle = `transition-transform motion-reduce:transform-none ease-in-out duration-500`;

export const Skill = (props: any) => {
  const [skillData, setSkillData] = useState<any>([]);
  const skillList = [
    [
      { id: 1111, level: 10 },
      { id: 2678, level: 20 },
      { id: 8485, level: 4 },
      { id: 964, level: 4 },
      { id: 6432, level: 20 },
    ],
    [
      { id: 5653, level: 0 },
      { id: 3964, level: 0 },
      { id: 9852, level: 0 },
      { id: 3721, level: 0 },
      { id: 1029, level: 0 },
    ],
    [
      { id: 0, level: 0 },
      { id: 1129, level: 0 },
      { id: 7661, level: 0 },
      { id: 690, level: 0 },
      { id: 6858, level: 0 },
    ],
    [
      { id: 0, level: 0 },
      { id: 2615, level: 0 },
      { id: 3494, level: 0 },
      { id: 7773, level: 0 },
      { id: 6451, level: 0 },
    ],
  ];

  useEffect(() => setSkillData(skillList), []);

  const checkIsContainSkill = (skill: number) => skill !== 0;
  const textSkillLevel = (level: number) =>
    level === 0 ? "" : level === 20 ? "max" : level;

  const updateSkillLevel = (skillId: number, value: number) => {
    const newLevelValue = (level: number) => {
      if (level + value === 21) return 20;
      else if (level + value === -1) return 0;
      else return level + value;
    };

    const newSkillData = skillData.map((data: any) =>
      data.map((skill: any) =>
        skill.id === skillId
          ? { ...skill, level: newLevelValue(skill.level) }
          : skill
      )
    );
    setSkillData(newSkillData);
  };

  return (
    <div className="grid text-center">
      <p className={`p-2 opacity-50`}>{props.class}</p>
      <div className={`grid text-center grid-cols-5 mb-12 lg:mb-0`}>
        {skillData.map((data: { id: number; level: number }[]) =>
          data.map(
            (
              skill: { id: number; level: number },
              index: Key | null | undefined
            ) =>
              checkIsContainSkill(skill.id) ? (
                <span key={index} className="group relative">
                  <h2 className={`text-xs lg:text-3xl font-semibold`}>
                    <span
                      className={`${commonStyle} inline-block translate-x-8 group-hover:translate-x-0 hover:scale-125 hover:cursor-pointer text-green-200`}
                      onClick={() => updateSkillLevel(skill.id, 1)}
                    >
                      +
                    </span>{" "}
                    <Image
                      className={`${commonStyle} inline-block relative z-10 group-hover:scale-110`}
                      src={`/skill/${skill.id}.png`}
                      alt="skill"
                      width={40}
                      height={40}
                      priority
                      draggable={false}
                    />
                    <span
                      className={`${commonStyle} inline-block absolute z-20 -right-6 lg:-right-3 text-sm -translate-x-10 translate-y-5 group-hover:scale-110 drop-shadow-[1px_1px_3px_#FF0000]`}
                    >
                      {textSkillLevel(skill.level)}
                    </span>{" "}
                    <span
                      className={`${commonStyle} inline-block -translate-x-8 group-hover:translate-x-0 hover:scale-125 hover:cursor-pointer text-red-200`}
                      onClick={() => updateSkillLevel(skill.id, -1)}
                    >
                      -
                    </span>
                  </h2>
                </span>
              ) : (
                <span />
              )
          )
        )}
      </div>
    </div>
  );
};
