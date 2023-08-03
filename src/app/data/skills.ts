import { assistSkill } from "./class/assist";
import { ringmasterSkill } from "@/app/data/class/ringmaster";
import { PARAMS } from "./enum";
import { ISkill } from "./interface";

export const SKILLS = [...assistSkill, ...ringmasterSkill] as ISkill[];

export const DEFAULTPARAMS = [
  {
    params: PARAMS.HP,
    detail: "HP",
  },
  {
    params: PARAMS.TIME,
    detail: "Time",
  },
  {
    params: PARAMS.DURATION,
    detail: "Time",
  },
  {
    params: PARAMS.ATTACK,
    detail: "Attack",
  },
  {
    params: PARAMS.ATTRIBUTE,
    detail: "Attack",
  },
];

export const SPECIALPARAMS = [
  {
    params: "incomingdamage",
    detail: "Incoming Damage",
    prefix: "+",
    suffix: "%",
  },
  {
    params: "maxhp",
    detail: "Increase HP",
    prefix: "+",
    suffix: "%",
  },
  {
    params: "speed",
    detail: "Speed",
    prefix: "+",
    suffix: "%",
  },
  {
    params: "int",
    detail: "INT",
    prefix: "+",
    suffix: "",
  },
  {
    params: "explostdecreaseatrevival",
    detail: "EXP Lost",
    prefix: ": ",
    suffix: "%",
  },
  {
    params: "attackspeed",
    detail: "Attack Speed",
    prefix: "+",
    suffix: "%",
  },
  {
    params: "decreasedcastingtime",
    detail: "Casting Speed",
    prefix: "+",
    suffix: "%",
  },
  {
    params: "sta",
    detail: "STA",
    prefix: "+",
    suffix: "",
  },
  {
    params: "block",
    detail: "Block",
    prefix: "+",
    suffix: "%",
  },
  {
    params: "str",
    detail: "STR",
    prefix: "+",
    suffix: "",
  },
  {
    params: "autohp",
    detail: "HP Recovery",
    prefix: " xx Below ",
    suffix: "% (PVE)",
  },
  {
    params: "autohppvp",
    detail: "HP Recovery",
    prefix: " xx Below ",
    suffix: "% (PVP)",
  },
  {
    params: "dex",
    detail: "DEX",
    prefix: "+",
    suffix: "",
  },
  {
    params: "hitrate",
    detail: "Hit Rate",
    prefix: "+",
    suffix: "%",
  },
];
