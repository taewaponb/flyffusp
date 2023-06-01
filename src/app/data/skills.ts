import { ASSIST } from "./class/assist";
import { ISkill } from "./interface";

export const SPECIALPARAMS = [
  {
    params: "incomingdamage",
    detail: "Incoming Damage",
  },
  {
    params: "maxhp",
    detail: "Increase HP",
  },
  {
    params: "speed",
    detail: "Speed",
  },
  {
    params: "int",
    detail: "INT",
  },
  {
    params: "explostdecreaseatrevival",
    detail: "EXP Lost",
  },
  {
    params: "attackspeed",
    detail: "Attack Speed",
  },
  {
    params: "decreasedcastingtime",
    detail: "Casting Speed",
  },
  {
    params: "sta",
    detail: "STA",
  },
  {
    params: "block",
    detail: "Block",
  },
  {
    params: "str",
    detail: "STR",
  },
  {
    params: "autohp",
    detail: "HP Recovery xx Below xx (PVE)",
  },
  {
    params: "autohppvp",
    detail: "HP Recovery xx Below xx (PVP)",
  },
  {
    params: "dex",
    detail: "DEX",
  },
  {
    params: "hitrate",
    detail: "Hit Rate",
  },
];

export const SKILLS = [...ASSIST] as ISkill[];
