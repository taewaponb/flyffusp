"use client";

import React from "react";
import { createContext, useContext, useState } from "react";
import { CHARACTERCLASS } from "../data/enum";
import { IPlayerData, ISkillData } from "../data/interface";

const initialUserData = {
  id: 1,
  class: CHARACTERCLASS.RINGMASTER,
  level: 60,
  currentPoints: 338,
  allPoints: 338,
};

const initialSkillData = [
  [
    { id: 1111, level: 0 },
    { id: 5653, level: 0 },
    { id: 0, level: 0 },
    { id: 0, level: 0 },
  ],
  [
    { id: 2678, level: 0 },
    { id: 3964, level: 0 },
    { id: 1129, level: 0 },
    { id: 2615, level: 0 },
  ],
  [
    { id: 8485, level: 0 },
    { id: 9852, level: 0 },
    { id: 7661, level: 0 },
    { id: 3494, level: 0 },
  ],
  [
    { id: 964, level: 0 },
    { id: 3721, level: 0 },
    { id: 690, level: 0 },
    { id: 7773, level: 0 },
  ],
  [
    { id: 6432, level: 0 },
    { id: 1029, level: 0 },
    { id: 6858, level: 0 },
    { id: 6451, level: 0 },
  ],
] as ISkillData[][];

const AppContext = createContext<{
  userData: IPlayerData;
  skillData: ISkillData[][];
  focusSkill: number;
  setUserData: React.Dispatch<React.SetStateAction<IPlayerData>>;
  setSkillData: React.Dispatch<React.SetStateAction<ISkillData[][]>>;
  setFocusSkill: React.Dispatch<React.SetStateAction<number>>;
}>({
  userData: initialUserData,
  skillData: initialSkillData,
  focusSkill: 0,
  setUserData: () => {},
  setSkillData: () => {},
  setFocusSkill: () => {},
});

export const AppWrapper = ({ children }: { children: JSX.Element }) => {
  const [userData, setUserData] = useState<IPlayerData>(initialUserData);
  const [skillData, setSkillData] = useState<ISkillData[][]>(initialSkillData);
  const [focusSkill, setFocusSkill] = useState<number>(0);

  const sharedState = {
    userData,
    skillData,
    focusSkill,
    setUserData,
    setSkillData,
    setFocusSkill,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
