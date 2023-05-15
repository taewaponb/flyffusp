import Image from "next/image";

export const Skill = (props: any) => {
  const skillList = [2615, 2615, 2615, 2615, 2615];
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
      {skillList.map((data) => (
        <a className="group rounded-lg border border-transparent px-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <>
            <h2 className={`mb-2 text-xl font-semibold`}>
              <Image
                className="inline-block"
                src="/skill/assknutampin.png"
                alt="skill"
                width={33}
                height={33}
                priority
                draggable={false}
              />{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>{data}</p>
          </>
        </a>
      ))}
    </div>
  );
};
