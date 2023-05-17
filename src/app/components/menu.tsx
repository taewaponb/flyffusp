"use client";

import { useGameContext } from "./context";

export const Menu = (props: any) => {
  const { userData, skillData, setUserData, setSkillData } = useGameContext();
  const menuData = [
    {
      header: "Points",
      detail: `${userData.currentPoints} / ${userData.allPoints}`,
    },
    {
      header: "Level",
      detail: `${userData.level}`,
    },
    {
      header: "Job",
      detail: `${userData.class}`,
    },
  ];

  const resetPoints = () => {
    setSkillData(
      skillData.map((data) => data.map((skill) => ({ ...skill, level: 0 })))
    );

    setUserData({
      ...userData,
      currentPoints: userData.allPoints,
    });
  };

  const descriptionBox = (header: string, detail: string) => {
    return (
      <a
        key={header}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        onClick={() => resetPoints()}
      >
        <p className={`m-0 opacity-50`}>{header}</p>
        <h2 className={`mb-3 text-2xl font-semibold`}>{detail}</h2>
      </a>
    );
  };

  return (
    <div className="grid text-center lg:mb-0 lg:grid-cols-3 hover:cursor-pointer">
      {menuData.map((data) => descriptionBox(data.header, data.detail))}
    </div>
  );
};
