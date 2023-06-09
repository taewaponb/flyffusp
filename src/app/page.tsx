"use client";

import { Skill } from "./components/skill";
import { Header } from "./components/header";
import { Description } from "./components/description";
import { Menu } from "./components/menu";
import { JOB } from "./data/enum";
import { AppWrapper, useAppContext } from "./components/context";

export default function Home() {
  const { userData } = useAppContext();

  return (
    <AppWrapper>
      <main className="prevent-select flex min-h-screen flex-col items-center justify-between px-6 py-24">
        <Header />
        <Description />
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {userData.class.map((data) => (
            <Skill class={data} />
          ))}
        </div>
        <Menu />
      </main>
    </AppWrapper>
  );
}
