import { CHARACTERCLASS } from "./enum";

export interface IPlayerData {
  id: number;
  class: CHARACTERCLASS;
  level: number;
  currentPoints: number;
  allPoints: number;
}

export interface ISkillData {
  id: number;
  level: number;
}
