"use client";

import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { JOB } from "../data/enum";
import { IUserData, ISkillData } from "../data/interface";
import { assistSkillContext } from "../data/class/assist";
import { ringmasterSkillContext } from "../data/class/ringmaster";
import { saveData } from "@/app/helper/helper";

const initialUserData = {
  id: 1,
  class: [JOB.ASSIST, JOB.RINGMASTER],
  level: 60,
  currentPoints: 338,
  allPoints: 338,
};

const initialSkillData = [
  ...assistSkillContext,
  ...ringmasterSkillContext,
] as ISkillData[][];

const AppContext = createContext<{
  userData: IUserData;
  skillData: ISkillData[][];
  focusSkill: number;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
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
  const [userData, setUserData] = useState<IUserData>(initialUserData);
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

  useEffect(() => {
    const localUserData = JSON.parse(
      localStorage.getItem("userData") as string,
    ) as IUserData;
    const localSkillData = JSON.parse(
      localStorage.getItem("skillData") as string,
    ) as ISkillData[][];

    if (localUserData) setUserData(localUserData);
    if (localSkillData) setSkillData(localSkillData);
  }, []);

  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("skillData", JSON.stringify(skillData));

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
