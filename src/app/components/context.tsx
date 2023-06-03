"use client";

import React from "react";
import { createContext, useContext, useState } from "react";
import { JOB } from "../data/enum";
import { IPlayerData, ISkillContext } from "../data/interface";
import { assistSkillContext } from "../data/class/assist";
import { ringmasterSkillContext } from "../data/class/ringmaster";

const initialUserData = {
  id: 1,
  class: JOB.RINGMASTER,
  level: 60,
  currentPoints: 338,
  allPoints: 338,
};

const initialSkillData = [
  ...assistSkillContext,
  ...ringmasterSkillContext,
] as ISkillContext[][];

const AppContext = createContext<{
  userData: IPlayerData;
  skillData: ISkillContext[][];
  focusSkill: number;
  setUserData: React.Dispatch<React.SetStateAction<IPlayerData>>;
  setSkillData: React.Dispatch<React.SetStateAction<ISkillContext[][]>>;
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
  const [skillData, setSkillData] =
    useState<ISkillContext[][]>(initialSkillData);
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
