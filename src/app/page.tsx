import { Skill } from "./components/skill";
import { Header } from "./components/header";
import { Description } from "./components/description";
import { Menu } from "./components/menu";
import { CHARACTERCLASS } from "./data/enum";
import { AppWrapper } from "./components/context";

export default function Home() {
  return (
    <AppWrapper>
      <main className="prevent-select flex min-h-screen flex-col items-center justify-between px-6 py-24">
        <Header />
        <Description />
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <Skill class={CHARACTERCLASS.ASSIST} />
        </div>
        <Menu />
      </main>
    </AppWrapper>
  );
}
