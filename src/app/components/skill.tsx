"use client";

import Image from "next/image";
import { useAppContext } from "./context";
import { getSkillDatafromId } from "../helper/helper";

const commonStyle = `transition-transform motion-reduce:transform-none ease-in-out duration-500`;

export const Skill = (props: any) => {
  const { userData, skillData, setSkillData, setUserData, setFocusSkill } =
    useAppContext();

  const checkIsContainSkill = (skill: number) => skill !== 0;
  const textSkillLevel = (level: number) => {
    switch (level) {
      case 0:
        return "";
      case 20:
        return "max";
      default:
        return level.toString();
    }
  };

  const updateSkillLevel = (skillId: number, value: number) => {
    const pointCost = value * getSkillDatafromId(skillId)!.skillPoints;
    if (userData.currentPoints < pointCost) return;
    const getUpdatedLevel = (level: number) => {
      let newLevel = level + value;
      let newPoints = userData.currentPoints;

      if (newLevel >= 21) newLevel = 20;
      else if (newLevel <= -1) newLevel = 0;
      else newPoints -= pointCost;

      setUserData({ ...userData, currentPoints: newPoints });

      return newLevel;
    };

    const newSkillData = skillData.map((data) =>
      data.map((skill) =>
        skill.id === skillId
          ? { ...skill, level: getUpdatedLevel(skill.level) }
          : skill
      )
    );

    setSkillData(newSkillData);
  };

  const setFocus = (skillId: number) => {
    setFocusSkill(skillId);
  };

  return (
    <div className="grid text-center">
      <p className={`p-2 opacity-50`}>{props.class}</p>
      <div
        className={`grid text-center grid-cols-5 mb-12 lg:mb-0 hover:cursor-pointer`}
      >
        {skillData.map(
          (data: { id: number; level: number }[], skillIndex: number) => (
            <div
              key={skillIndex}
              className={`grid text-center grid-rows-4 mb-12 lg:mb-0 hover:cursor-pointer`}
            >
              {data.map(
                (skill: { id: number; level: number }, dataIndex: number) =>
                  checkIsContainSkill(skill.id) ? (
                    <span key={dataIndex} className="group relative">
                      <h2 className={`text-xs lg:text-3xl font-semibold`}>
                        <span
                          className={`${commonStyle} inline-block translate-x-8 group-hover:translate-x-0 hover:scale-125 text-green-400`}
                          onClick={() => updateSkillLevel(skill.id, 1)}
                        >
                          +
                        </span>{" "}
                        <Image
                          className={`${commonStyle} inline-block relative z-10 group-hover:scale-110`}
                          src={`/skills/${skill.id}.png`}
                          alt="skillImage"
                          width={40}
                          height={40}
                          priority
                          draggable={false}
                          onClick={() => setFocus(skill.id)}
                        />
                        <span
                          className={`${commonStyle} inline-block absolute z-20 -right-6 lg:-right-3 text-sm -translate-x-10 translate-y-5 group-hover:scale-110 drop-shadow-[1px_1px_3px_#FF0000]`}
                        >
                          {textSkillLevel(skill.level)}
                        </span>{" "}
                        <span
                          className={`${commonStyle} inline-block -translate-x-8 group-hover:translate-x-0 hover:scale-125 text-red-400`}
                          onClick={() => updateSkillLevel(skill.id, -1)}
                        >
                          -
                        </span>
                      </h2>
                    </span>
                  ) : (
                    <span key={dataIndex} />
                  )
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
