"use client";

import React from "react";
import { createContext, useContext, useState } from "react";
import { CHARACTERCLASS } from "../data/enum";
import { IPlayerData } from "../data/interface";

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
    { id: 2678, level: 0 },
    { id: 8485, level: 0 },
    { id: 964, level: 0 },
    { id: 6432, level: 0 },
  ],
  [
    { id: 5653, level: 0 },
    { id: 3964, level: 0 },
    { id: 9852, level: 0 },
    { id: 3721, level: 0 },
    { id: 1029, level: 0 },
  ],
  [
    { id: 0, level: 0 },
    { id: 1129, level: 0 },
    { id: 7661, level: 0 },
    { id: 690, level: 0 },
    { id: 6858, level: 0 },
  ],
  [
    { id: 0, level: 0 },
    { id: 2615, level: 0 },
    { id: 3494, level: 0 },
    { id: 7773, level: 0 },
    { id: 6451, level: 0 },
  ],
];

interface tempSkillDataType {
  id: number;
  level: number;
}

const AppContext = createContext<{
  userData: IPlayerData;
  skillData: tempSkillDataType[][];
  setUserData: React.Dispatch<React.SetStateAction<IPlayerData>>;
  setSkillData: React.Dispatch<React.SetStateAction<tempSkillDataType[][]>>;
}>({
  userData: initialUserData,
  skillData: initialSkillData,
  setUserData: () => {},
  setSkillData: () => {},
});

export const AppWrapper = ({ children }: { children: JSX.Element }) => {
  const [userData, setUserData] = useState<IPlayerData>(initialUserData);
  const [skillData, setSkillData] =
    useState<tempSkillDataType[][]>(initialSkillData);

  const sharedState = {
    userData,
    skillData,
    setUserData,
    setSkillData,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useGameContext = () => useContext(AppContext);
