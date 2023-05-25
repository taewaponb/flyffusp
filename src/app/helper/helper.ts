import { SKILLS } from "../data/skills";

export const getSkillDatafromId = (id: number) =>
  SKILLS.find((skill) => skill.id === id);

export const getTimeFormat = (duration: number) => {
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;
  let time = "";
  time += "0" + mins + ":" + (secs < 10 ? "0" : "");
  time += "" + secs;
  return time;
};
