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

export interface ISkill {
  id: number;
  name: {
    en: string;
  };
  description: {
    en: string;
  };
  icon: string;
  class: number;
  level: number;
  element: string;
  magic: boolean;
  requirements: [];
  weapon: string;
  combo: string;
  debuff: boolean;
  flying: boolean;
  passive: boolean;
  target: string;
  skillPoints: number;
  levels: ISkillLevel[];
}

export interface ISkillLevel {
  damageMultiplier?: number;
  minAttack?: number;
  maxAttack?: number;
  dotTick?: number;
  consumedMP?: number;
  cooldown?: number;
  casting?: number;
  duration?: number;
  durationPVP?: number;
  abilities: IAbilities[];
  scalingParameters: IScalingParameters[];
}

export interface IAbilities {
  parameter: string;
  attribute?: string;
  dotMode?: string;
  dotValue?: number;
  add?: number;
  rate?: boolean;
}

export interface IScalingParameters {
  parameter: string;
  stat: string;
  scale?: number;
  pvp?: boolean;
  pve?: boolean;
}
