import { IUserData, ISkillData } from "../data/interface";
import { DEFAULTPARAMS, SKILLS, SPECIALPARAMS } from "../data/skills";

export const saveData = (userData: IUserData, skillData: ISkillData[][]) => {
  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("skillData", JSON.stringify(skillData));
};

export const wordCapitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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

export const getDefaultParams = (params: any) => {
  return DEFAULTPARAMS.find((item) => item.params === params);
};

export const getSpecialParams = (params: any) => {
  return SPECIALPARAMS.find((item) => item.params === params);
};

export const getPoints = (level: number) => {
  const minPoints = 88;
  const classBonus = 100;
  let points = minPoints;

  if (level == 15) {
    minPoints;
  } else if (level < 21) {
    points += 2 * (level - 15);
  } else if (level < 41) {
    points += 2 * 5 + 3 * (level - 20);
  } else if (level == 60) {
    points += 2 * 5 + 3 * 20 + 4 * (level - 40) + classBonus;
  } else if (level < 61) {
    points += 2 * 5 + 3 * 20 + 4 * (level - 40);
  } else if (level < 81) {
    points += 2 * 5 + 3 * 20 + 4 * 20 + 5 * (level - 60) + classBonus;
  } else if (level < 101) {
    points += 2 * 5 + 3 * 20 + 4 * 20 + 5 * 20 + 6 * (level - 80) + classBonus;
  } else if (level < 120) {
    points +=
      2 * 5 +
      3 * 20 +
      4 * 20 +
      5 * 20 +
      6 * 20 +
      7 * (level - 100) +
      classBonus;
  } else {
    points = 698;
  }

  return points;
};
