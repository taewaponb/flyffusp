"use client";

import Image from "next/image";
import { useAppContext } from "./context";
import { getSkillDatafromId, getTimeFormat } from "../helper/helper";
import { PARAMS } from "../data/enum";

export const Description = () => {
  const { focusSkill, skillData } = useAppContext();

  const mockTitle = "Ringmaster";
  const mockDescription =
    "Ringmasters make great allies, using their sticks to protect themselves and their friends. Their use of healing and support capabilities make them vital party members in any battle.";

  const currentSkill = getSkillDatafromId(focusSkill);
  const currentSkillSet = skillData.filter((data) =>
    data.find((skill) => skill.id === focusSkill)
  )[0];
  const currentSkillLevel = currentSkillSet.find(
    (skill) => skill.id === focusSkill
  )!.level;

  const SkillDescription = () => {
    const indexLevel = currentSkillLevel > 1 ? currentSkillLevel - 1 : 0;
    const skillLevel = currentSkill?.levels[indexLevel];
    const levelAbility = skillLevel?.abilities;
    const levelScaling = skillLevel?.scalingParameters;

    const getParamLabel = (param: string | undefined) => {
      switch (param) {
        case PARAMS.HP:
          return "Heal";
        case PARAMS.ATTACK:
          return "Attack";
        case PARAMS.TIME:
          return "Time";
        case PARAMS.DURATION:
          return "Time";
        default:
          return param;
      }
    };

    const isBaseValid = (param: string) =>
      param === PARAMS.HP || param === PARAMS.ATTACK;

    const isScaleValie = (param: string) =>
      param === PARAMS.TIME || param === PARAMS.DURATION;

    return (
      <>
        <p className={`m-0 lg:w-[40ch] text-sm`}>
          {`MP: ${skillLevel?.consumedMP}`}
        </p>
        <p className={`m-0 lg:w-[40ch] text-sm`}>
          {`Character Level: ${currentSkill?.level}`}
        </p>
        {skillLevel?.damageMultiplier && (
          <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
            {`Base Damage: ${skillLevel?.minAttack} ~ ${skillLevel?.maxAttack}`}
          </p>
        )}
        {levelAbility?.map(
          (ability) =>
            isBaseValid(ability.parameter) && (
              <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
                {`Base ${getParamLabel(ability.parameter)}: ${ability.add}`}
              </p>
            )
        )}
        {levelScaling?.map(
          (scaling) =>
            isBaseValid(scaling.parameter) && (
              <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
                {`${getParamLabel(
                  scaling.parameter
                )} Scaling: ${scaling.stat.toUpperCase()} x ${scaling.scale}`}
              </p>
            )
        )}
        {skillLevel?.duration && (
          <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
            {`Base Time: ${getTimeFormat(skillLevel?.duration)}`}
          </p>
        )}
        {levelScaling?.map(
          (scaling) =>
            isScaleValie(scaling.parameter) && (
              <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
                {`${getParamLabel(
                  scaling.parameter
                )} Scaling: ${scaling.stat.toUpperCase()} x ${scaling.scale}`}
              </p>
            )
        )}
        {skillLevel?.cooldown && (
          <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
            {`Cooldown: ${getTimeFormat(skillLevel?.cooldown)}`}
          </p>
        )}
        {skillLevel?.dotTick && (
          <p className={`m-0 lg:w-[40ch] text-sm font-bold`}>
            {`DoT Tick: ${skillLevel?.dotTick} Seconds`}
          </p>
        )}
        {levelAbility?.map(
          (ability) =>
            ability.parameter === PARAMS.INCOMINGDAMAGE && (
              <p
                className={`m-0 lg:w-[40ch] text-sm text-indigo-500`}
              >{`Incoming Damage+${ability.add}%`}</p>
            )
        )}
        <p className={`m-0 lg:w-[40ch] text-sm`}>
          {`${currentSkill?.description.en}`}
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
            : `${getSkillDatafromId(focusSkill)?.name.en} ${
                currentSkillLevel != 0 ? `Lv. ${currentSkillLevel}` : ``
              }`}
        </h2>
        {focusSkill == 0 ? (
          <p className={`m-0 lg:w-[40ch] text-sm opacity-50`}>
            {mockDescription}
          </p>
        ) : (
          <SkillDescription />
        )}
      </a>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src={
          focusSkill
            ? `/skills/${currentSkill?.icon}`
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
