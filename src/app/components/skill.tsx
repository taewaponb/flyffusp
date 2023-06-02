"use client";

import Image from "next/image";
import { useAppContext } from "./context";
import { getSkillContextFromId, getSkillDataFromId } from "../helper/helper";

const commonStyle = `transition-transform motion-reduce:transform-none ease-in-out duration-500`;

export const Skill = (props: any) => {
  const { userData, skillData, setSkillData, setUserData, setFocusSkill } =
    useAppContext();

  const checkIsContainSkill = (skill: number) => skill !== 0;
  const setFocus = (skillId: number) => setFocusSkill(skillId);
  const textSkillLevel = (level: number) => {
    if (level == 0) return "";
    if (level == 20) return "max";
    else return level.toString();
  };

  const skillStyle = (skill: { id: number; level: number }) => {
    const currentSkill = getSkillDataFromId(skill.id);
    const requiredSkillResult = currentSkill?.requirements.map(
      (req) => getSkillContextFromId(skillData, req.skill).level >= req.level
    );

    if (requiredSkillResult?.includes(false)) return "grayscale";
    if (skill.level == 0) return "grayscale-[50%]";
    else return "grayscale-0";
  };

  const updateSkillLevel = (skillId: number, value: number) => {
    setFocus(skillId);
    const pointCost = value * getSkillDataFromId(skillId)!.skillPoints;
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
                          className={`${commonStyle}  ${
                            skillStyle(skill) != "grayscale"
                              ? "visible"
                              : "invisible"
                          } inline-block translate-x-8 group-hover:-translate-x-1 hover:scale-125 text-green-400`}
                          onClick={() => updateSkillLevel(skill.id, 1)}
                        >
                          +
                        </span>
                        <Image
                          className={`${commonStyle} ${skillStyle(
                            skill
                          )} inline-block relative z-10 group-hover:scale-110 hover:grayscale-[50%]`}
                          src={`/skills/${getSkillDataFromId(skill.id)?.icon}`}
                          alt="skillImage"
                          width={40}
                          height={40}
                          priority
                          draggable={false}
                          onClick={() => {
                            setFocus(skill.id);
                          }}
                        />
                        <span
                          className={`${commonStyle} inline-block absolute z-20 -right-7 lg:-right-5 text-sm -translate-x-10 translate-y-5 group-hover:scale-110 drop-shadow-[1px_1px_3px_#FF0000]`}
                          onClick={() => setFocus(skill.id)}
                        >
                          {textSkillLevel(skill.level)}
                        </span>
                        <span
                          className={`${commonStyle} ${
                            skillStyle(skill) != "grayscale"
                              ? "visible"
                              : "invisible"
                          } inline-block -translate-x-8 group-hover:translate-x-1 hover:scale-125 text-red-400`}
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
