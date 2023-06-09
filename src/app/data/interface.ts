import { JOB } from "./enum";

export interface IPlayerData {
  id: number;
  class: JOB[];
  level: number;
  currentPoints: number;
  allPoints: number;
}

export interface ISkillContext {
  id: number;
  level: number;
  class?: JOB;
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
  requirements: ISkillRequire[];
  weapon: string;
  combo: string;
  debuff: boolean;
  flying: boolean;
  passive: boolean;
  target: string;
  skillPoints: number;
  levels: ISkillLevel[];
}

export interface ISkillRequire {
  level: number;
  skill: number;
}

export interface ISkillLevel {
  damageMultiplier?: number;
  minAttack?: number;
  maxAttack?: number;
  dotTick?: number;
  consumedMP?: number;
  consumedFP?: number;
  cooldown?: number;
  casting?: number;
  duration?: number;
  durationPVP?: number;
  spellRange?: number;
  abilities: IAbilities[];
  scalingParameters: IScalingParams[];
}

export interface IAbilities {
  parameter: string;
  attribute?: string;
  dotMode?: string;
  dotValue?: number;
  add?: number;
  rate?: boolean;
  skill: number;
  skillLevel: number;
  pvp: true;
  pve: false;
}

export interface IScalingParams {
  parameter: string;
  stat: string;
  scale?: number;
  maximum?: number;
  pvp?: boolean;
  pve?: boolean;
}
