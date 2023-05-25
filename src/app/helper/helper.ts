import { SKILLS } from "../data/skills";

export const getSkillDatafromId = (id: number) =>
  SKILLS.find((skill) => skill.id === id);
