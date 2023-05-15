import { Skill } from "./components/skill";
import { Header } from "./components/header";
import { Description } from "./components/description";
import { Menu } from "./components/menu";

export default function Home() {
  return (
    <main className="prevent-select flex min-h-screen flex-col items-center justify-between px-6 py-24">
      <Header />
      <Description />
      <Skill />
      <Menu />
    </main>
  );
}
