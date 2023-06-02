import { ISkillData } from "../data/interface";
import { SKILLS, SPECIALPARAMS } from "../data/skills";

export const getSkillDataFromId = (id: number) =>
  SKILLS.find((skill) => skill.id === id);

export const getSkillContextFromId = (skillData: ISkillData[][], id: number) =>
  skillData
    .filter((data) => data.find((skill) => skill.id === id))
    .map((data) => data.find((skill) => skill.id === id)!)[0];

export const getTimeFormat = (duration: number) => {
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;
  let time = "";
  time += "0" + mins + ":" + (secs < 10 ? "0" : "");
  time += "" + secs;
  return time;
};

export const isSpecialParams = (skill: any) => {
  return SPECIALPARAMS.find((item) => item.params === skill);
};

export const getSpecialParamsDetail = (skill: any) => {
  return SPECIALPARAMS.find((item) => item.params === skill)?.detail;
};

export const getSpecialParamsPrefix = (skill: any) => {
  return SPECIALPARAMS.find((item) => item.params === skill)?.prefix;
};

export const getSpecialParamsSuffix = (skill: any) => {
  return SPECIALPARAMS.find((item) => item.params === skill)?.suffix;
};
