"use client";

import Image from "next/image";
import { useAppContext } from "./context";
import { getSkillDatafromId } from "../helper/helper";

export const Description = () => {
  const { focusSkill, skillData } = useAppContext();

  const mockTitle = "Ringmaster";
  const mockDescription =
    "Ringmasters make great allies, using their sticks to protect themselves and their friends. Their use of healing and support capabilities make them vital party members in any battle.";

  const skillDescription = () => {
    const currentSkillId = getSkillDatafromId(focusSkill);
    const currentSkillSet = skillData.filter((data) =>
      data.find((skill) => skill.id === focusSkill)
    )[0];
    const currentSkillLevel = currentSkillSet.find(
      (skill) => skill.id === focusSkill
    )!.level;

    const indexLevel = currentSkillLevel > 1 ? currentSkillLevel - 1 : 0;

    const skillLevel = currentSkillId!.levels[indexLevel];
    const levelAbility = skillLevel.abilities[0];
    const levelScaling = skillLevel.scalingParameters[0];

    const levelDescription = (param: string | undefined) =>
      `${(param = "hp" ? "Heal" : "Time")}`;

    return (
      <>
        <p className={`m-0 lg:w-[40ch] text-sm`}>
          {`MP: ${skillLevel.consumedMP}`}
        </p>
        <p className={`m-0 lg:w-[40ch] text-sm`}>
          {`Character Level: ${currentSkillId?.level}`}
        </p>
        <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
          {`Base ${levelDescription(levelAbility.parameter)}: ${
            levelAbility.add
          }`}
        </p>
        <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
          {`${levelDescription(
            levelScaling.parameter
          )} Scaling: ${levelScaling.stat.toUpperCase()} x ${
            levelScaling.scale
          }`}
        </p>
        <p className={`m-0 lg:w-[40ch] text-sm`}>
          {`${currentSkillId?.description.en}`}
        </p>
      </>
    );
  };

  return (
    <div className="mb-6 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      <a className="group rounded-lg border border-transparent py-4">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {focusSkill == 0
            ? mockTitle
            : `${getSkillDatafromId(focusSkill)?.name.en}`}
        </h2>
        {focusSkill == 0 ? (
          <p className={`m-0 lg:w-[40ch] text-sm opacity-50`}>
            {mockDescription}
          </p>
        ) : (
          skillDescription()
        )}
      </a>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src={
          focusSkill
            ? `/skills/${focusSkill}.png`
            : "/class/character/ringmaster.png"
        }
        alt="descriptionImage"
        width={180}
        height={180}
        priority
        draggable={false}
      />
    </div>
  );
};
