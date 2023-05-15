import { Skill } from "./components/skill";
import { Description } from "./components/description";
import { Header } from "./components/header";
import { Character } from "./components/character";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24">
      <Header />
      <Character />
      <Skill />
      <Description />
    </main>
  );
}
