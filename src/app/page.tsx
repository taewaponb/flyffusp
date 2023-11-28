"use client";

import { Skill } from "./components/skill";
import { Header } from "./components/header";
import { Description } from "./components/description";
import { Menu } from "./components/menu";
import { AppWrapper } from "./components/context";
import { Footer } from "./components/footer";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <AppWrapper>
      <main className="prevent-select flex min-h-screen flex-col items-center justify-between px-6 lg:py-12 py-20">
        <Header />
        <Description />
        <Skill />
        <div className="lg:mb-6" />
        <Menu />
        <Footer />
        <Analytics />
      </main>
    </AppWrapper>
  );
}
