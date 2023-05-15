import Image from "next/image";

export const Skill = (props: any) => {
  const skillList = [
    [
      { id: 1, level: 0 },
      { id: 1, level: 0 },
      { id: 1, level: 0 },
      { id: 1, level: 0 },
      { id: 1, level: 0 },
    ],
    [
      { id: 2, level: 0 },
      { id: 2, level: 0 },
      { id: 2, level: 0 },
      { id: 2, level: 0 },
      { id: 2, level: 0 },
    ],
    [
      { id: 0, level: 0 },
      { id: 2, level: 0 },
      { id: 2, level: 0 },
      { id: 2, level: 0 },
      { id: 2, level: 0 },
    ],
    [
      { id: 0, level: 0 },
      { id: 2615, level: 0 },
      { id: 2, level: 0 },
      { id: 2, level: 0 },
      { id: 2, level: 0 },
    ],
  ];

  const checkIsContainSkill = (skill: number) => skill !== 0;

  return (
    <div
      className={`mb-32 grid text-center lg:mb-0 lg:grid-cols-${skillList[0].length} lg:text-center`}
    >
      {skillList.map((data) =>
        data.map((skill) =>
          checkIsContainSkill(skill.id) ? (
            <a className="group relative rounded-lg border border-transparent px-1 py-0.5">
              <h2 className={`text-3xl font-semibold`}>
                <span className="inline-block transition-transform translate-x-8 hover:scale-125 hover:cursor-pointer group-hover:translate-x-0 motion-reduce:transform-none text-green-200">
                  +
                </span>{" "}
                <Image
                  className="inline-block relative z-10 group-hover:scale-125 transition ease-in-out duration-200"
                  src="/skill/assknutampin.png"
                  alt="skill"
                  width={40}
                  height={40}
                  priority
                  draggable={false}
                />{" "}
                <span className="inline-block transition-transform -translate-x-8 hover:scale-125 hover:cursor-pointer group-hover:translate-x-0 motion-reduce:transform-none text-red-200">
                  -
                </span>
              </h2>
            </a>
          ) : (
            <span />
          )
        )
      )}
    </div>
  );
};
