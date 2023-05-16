export const Menu = (props: any) => {
  const boxData = [
    {
      header: "Job",
      detail: "Ringmaster",
    },
    {
      header: "Level",
      detail: "60 / 120",
    },
    {
      header: "Points",
      detail: "338 / 698",
    },
  ];

  const descriptionBox = (header: string, detail: string) => {
    return (
      <a
        key={header}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <p className={`m-0 max-w-[30ch] opacity-50`}>{header}</p>
        <h2 className={`mb-3 text-2xl font-semibold`}>{detail}</h2>
      </a>
    );
  };

  return (
    <div className="grid text-center lg:mb-0 lg:grid-cols-3 lg:text-center">
      {boxData.map((data) => descriptionBox(data.header, data.detail))}
    </div>
  );
};
