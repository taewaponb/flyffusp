import { ISkill } from "./interface";

export const SKILLS = [
  {
    id: 8203,
    name: {
      en: "Moon Beam",
    },
    description: {
      en: "Calls upon the moon to weaken the target. All damage done to the target while this de-buff is active is increased.",
    },
    icon: "asschemoonbeam.png",
    class: 8962,
    level: 15,
    element: "none",
    magic: true,
    requirements: [],
    weapon: "stick",
    combo: "general",
    debuff: true,
    flying: true,
    passive: false,
    target: "single",
    skillPoints: 2,
    levels: [
      {
        damageMultiplier: 0.36,
        minAttack: 35,
        maxAttack: 36,
        dotTick: 0.5,
        consumedMP: 40,
        cooldown: 8,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 1,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.52,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 35,
        maxAttack: 36,
        dotTick: 0.5,
        consumedMP: 40,
        cooldown: 7,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 2,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.54,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 36,
        maxAttack: 37,
        dotTick: 0.5,
        consumedMP: 42,
        cooldown: 7,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 2,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.56,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 36,
        maxAttack: 37,
        dotTick: 0.5,
        consumedMP: 42,
        cooldown: 7,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 2,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.58,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 37,
        maxAttack: 38,
        dotTick: 0.5,
        consumedMP: 44,
        cooldown: 6,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 3,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.6,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 37,
        maxAttack: 38,
        dotTick: 0.5,
        consumedMP: 44,
        cooldown: 6,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 3,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.62,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 38,
        maxAttack: 39,
        dotTick: 0.5,
        consumedMP: 46,
        cooldown: 6,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 3,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.64,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 38,
        maxAttack: 39,
        dotTick: 0.5,
        consumedMP: 46,
        cooldown: 6,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 4,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.66,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 39,
        maxAttack: 40,
        dotTick: 0.5,
        consumedMP: 48,
        cooldown: 6,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 4,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.68,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 39,
        maxAttack: 40,
        dotTick: 0.5,
        consumedMP: 48,
        cooldown: 5,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 4,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.7,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 40,
        maxAttack: 41,
        dotTick: 0.5,
        consumedMP: 50,
        cooldown: 5,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 5,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.72,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 40,
        maxAttack: 41,
        dotTick: 0.5,
        consumedMP: 50,
        cooldown: 5,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 5,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.74,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 41,
        maxAttack: 42,
        dotTick: 0.5,
        consumedMP: 52,
        cooldown: 5,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 5,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.76,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 41,
        maxAttack: 42,
        dotTick: 0.5,
        consumedMP: 52,
        cooldown: 5,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 6,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.78,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 42,
        maxAttack: 43,
        dotTick: 0.5,
        consumedMP: 54,
        cooldown: 4,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 6,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.8,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 43,
        maxAttack: 44,
        dotTick: 0.5,
        consumedMP: 54,
        cooldown: 4,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 6,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.82,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 44,
        maxAttack: 45,
        dotTick: 0.5,
        consumedMP: 56,
        cooldown: 4,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 7,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.84,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 45,
        maxAttack: 46,
        dotTick: 0.5,
        consumedMP: 56,
        cooldown: 4,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 7,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.86,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 47,
        maxAttack: 48,
        dotTick: 0.5,
        consumedMP: 58,
        cooldown: 4,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 7,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.88,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        damageMultiplier: 0.36,
        minAttack: 49,
        maxAttack: 50,
        dotTick: 0.5,
        consumedMP: 60,
        cooldown: 3,
        casting: 0.625,
        duration: 9,
        durationPVP: 9,
        abilities: [
          {
            parameter: "attribute",
            attribute: "moonbeam",
            dotMode: "currentdamage",
            dotValue: 100,
          },
          {
            parameter: "incomingdamage",
            add: 8,
            rate: true,
          },
        ],
        scalingParameters: [
          {
            parameter: "attack",
            stat: "int",
            scale: 3.9,
            pvp: true,
            pve: true,
          },
          {
            parameter: "duration",
            stat: "int",
            scale: 0.01,
            pvp: true,
            pve: true,
          },
        ],
      },
    ],
  },
  {
    id: 5653,
    name: {
      en: "Heal",
    },
    description: {
      en: "Recover the HP of a target.",
    },
    icon: "assheahealin.png",
    class: 8962,
    level: 15,
    element: "none",
    magic: true,
    requirements: [],
    weapon: "stick",
    combo: "general",
    debuff: false,
    flying: true,
    passive: false,
    target: "single",
    skillPoints: 2,
    levels: [
      {
        consumedMP: 17,
        casting: 0.6,
        abilities: [
          {
            parameter: "hp",
            add: 200,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.52,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 17,
        casting: 0.575,
        abilities: [
          {
            parameter: "hp",
            add: 220,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.54,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 19,
        casting: 0.55,
        abilities: [
          {
            parameter: "hp",
            add: 240,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.56,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 19,
        casting: 0.525,
        abilities: [
          {
            parameter: "hp",
            add: 260,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.58,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 19,
        casting: 0.5,
        abilities: [
          {
            parameter: "hp",
            add: 280,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.6,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 19,
        casting: 0.475,
        abilities: [
          {
            parameter: "hp",
            add: 300,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.62,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 22,
        casting: 0.45,
        abilities: [
          {
            parameter: "hp",
            add: 320,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.64,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 22,
        casting: 0.425,
        abilities: [
          {
            parameter: "hp",
            add: 340,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.66,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 25,
        casting: 0.4,
        abilities: [
          {
            parameter: "hp",
            add: 360,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.68,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 25,
        casting: 0.375,
        abilities: [
          {
            parameter: "hp",
            add: 380,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.7,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 27,
        casting: 0.35,
        abilities: [
          {
            parameter: "hp",
            add: 400,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.72,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 27,
        casting: 0.325,
        abilities: [
          {
            parameter: "hp",
            add: 420,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.74,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 30,
        casting: 0.3,
        abilities: [
          {
            parameter: "hp",
            add: 440,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.76,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 30,
        casting: 0.275,
        abilities: [
          {
            parameter: "hp",
            add: 460,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.78,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 33,
        casting: 0.25,
        abilities: [
          {
            parameter: "hp",
            add: 480,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.8,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 33,
        casting: 0.25,
        abilities: [
          {
            parameter: "hp",
            add: 500,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.82,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 34,
        casting: 0.25,
        abilities: [
          {
            parameter: "hp",
            add: 540,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.84,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 34,
        casting: 0.25,
        abilities: [
          {
            parameter: "hp",
            add: 580,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.86,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 40,
        casting: 0.25,
        abilities: [
          {
            parameter: "hp",
            add: 620,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.88,
            pvp: true,
            pve: true,
          },
        ],
      },
      {
        consumedMP: 40,
        casting: 0.15,
        abilities: [
          {
            parameter: "hp",
            add: 650,
            rate: false,
          },
        ],
        scalingParameters: [
          {
            parameter: "hp",
            stat: "int",
            scale: 5.9,
            pvp: true,
            pve: true,
          },
        ],
      },
    ],
  },
] as ISkill[];
