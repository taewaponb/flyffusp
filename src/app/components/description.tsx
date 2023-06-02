"use client";

import Image from "next/image";
import { useAppContext } from "./context";
import {
  getSkillContextFromId,
  getSkillDataFromId,
  getTimeFormat,
  getSpecialParams,
} from "../helper/helper";
import { PARAMS } from "../data/enum";

export const Description = () => {
  const { focusSkill, skillData } = useAppContext();

  const mockTitle = "Ringmaster";
  const mockDescription =
    "Ringmasters make great allies, using their sticks to protect themselves and their friends. Their use of healing and support capabilities make them vital party members in any battle.";

  const currentSkill = getSkillDataFromId(focusSkill);
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

    const getRangeText = (text: string | undefined) => {
      switch (text) {
        case "area":
          return "Around";
        case "party":
          return "Party";
        default:
          return text;
      }
    };

    const isBaseValid = (param: string) =>
      param === PARAMS.HP || param === PARAMS.ATTACK;

    const isScaleValid = (param: string) =>
      param === PARAMS.TIME || param === PARAMS.DURATION;

    const Tab = (data: { value: string; style?: string }) => (
      <p className={`m-0 lg:w-[40ch] text-sm ${data.style}`}>{data.value}</p>
    );

    return (
      <>
        <Tab
          value={`${skillLevel?.consumedMP ? "MP" : "FP"}: ${
            skillLevel?.consumedMP
              ? skillLevel?.consumedMP
              : skillLevel?.consumedFP
          }`}
        />

        {currentSkill?.requirements?.map((req, index) => {
          const skillName = getSkillDataFromId(req.skill)?.name.en;
          const requiredSkill = getSkillContextFromId(skillData, req.skill);
          const isSkillValid =
            requiredSkill.level >= req.level ? "" : "text-red-600";

          return (
            <Tab
              value={`${skillName} skill level ${req.level} is needed.`}
              style={isSkillValid}
              key={index}
            />
          );
        })}

        <Tab value={`Character Level: ${currentSkill?.level}`} />

        {skillLevel?.minAttack && (
          <Tab
            value={`Base Damage: ${skillLevel?.minAttack} ~ ${skillLevel?.maxAttack}`}
            style="font-bold"
          />
        )}

        {levelAbility?.map((ability, index) => {
          if (isBaseValid(ability.parameter)) {
            return (
              <Tab
                value={`Base ${getParamLabel(ability.parameter)}: ${
                  ability.add
                }`}
                style="font-bold"
                key={index}
              />
            );
          }
          return null;
        })}

        {levelScaling?.map((scaling, index) => {
          if (isBaseValid(scaling.parameter)) {
            return (
              <Tab
                value={`${getParamLabel(
                  scaling.parameter
                )} Scaling: ${scaling.stat.toUpperCase()} x ${scaling.scale?.toFixed(
                  1
                )}`}
                style="font-bold"
                key={index}
              />
            );
          }
          return null;
        })}

        {skillLevel?.duration && (
          <Tab
            value={`Base Time: ${getTimeFormat(skillLevel?.duration)}`}
            style="font-bold"
          />
        )}

        {levelScaling?.map((scaling, index) => {
          if (isScaleValid(scaling.parameter)) {
            return (
              <Tab
                value={`${getParamLabel(
                  scaling.parameter
                )} Scaling: ${scaling.stat.toUpperCase()} x ${scaling.scale}`}
                style="font-bold"
                key={index}
              />
            );
          }
          return null;
        })}

        {skillLevel?.casting && Number(skillLevel?.casting) >= 1 && (
          <Tab
            value={`Casting Time: ${getTimeFormat(skillLevel?.casting)}`}
            style="font-bold"
          />
        )}

        {skillLevel?.spellRange && (
          <Tab
            value={`Spell Range: ${skillLevel?.spellRange} (${getRangeText(
              currentSkill?.target
            )})`}
            style="font-bold"
          />
        )}

        {skillLevel?.cooldown && (
          <Tab
            value={`Cooldown: ${getTimeFormat(skillLevel?.cooldown)}`}
            style="font-bold"
          />
        )}

        {skillLevel?.dotTick && (
          <Tab
            value={`DoT Tick: ${skillLevel?.dotTick} Seconds`}
            style="font-bold"
          />
        )}

        {!currentSkill?.flying && (
          <Tab value={`Flying: No`} style="font-bold" />
        )}

        {levelAbility?.map((ability, index) => {
          if (getSpecialParams(ability.parameter)) {
            const detail = getSpecialParams(ability.parameter)?.detail;
            const prefix = getSpecialParams(ability.parameter)?.prefix;
            const suffix = getSpecialParams(ability.parameter)?.suffix;

            return (
              <Tab
                value={`${detail}${prefix}${ability.add}${suffix}`}
                style="text-indigo-500"
                key={index}
              />
            );
          }
          return null;
        })}

        {levelScaling?.map((scaling, index) => {
          if (getSpecialParams(scaling.parameter)) {
            const perstats = 25;
            const detail = getSpecialParams(scaling.parameter)?.detail;
            const prefix = getSpecialParams(scaling.parameter)?.prefix;
            const suffix = getSpecialParams(scaling.parameter)?.suffix;

            return (
              <Tab
                value={`${detail} Scaling: ${prefix}${
                  Number(scaling.scale) * perstats
                }${suffix} per ${perstats} INT (max ${
                  scaling.maximum
                }${suffix})`}
                style="text-amber-500"
                key={index}
              />
            );
          }
          return null;
        })}

        <Tab value={`${currentSkill?.description.en}`} />
      </>
    );
  };

  return (
    <div className="mb-6 relative flex place-items-center min-h-[360px] before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      <a className="group rounded-lg border border-transparent py-4">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {focusSkill == 0
            ? mockTitle
            : `${getSkillDataFromId(focusSkill)?.name.en} ${
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
