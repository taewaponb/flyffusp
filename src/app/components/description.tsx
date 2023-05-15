export const Description = (props: any) => {
  // const descriptionBoxData = [
  //   {
  //     header: "Job",
  //     detail: "Ringmaster",
  //   },
  //   {
  //     header: "Level",
  //     detail: "60 / 120",
  //   },
  //   {
  //     header: "Points",
  //     detail: "338 / 698",
  //   },
  // ];

  const descriptionBoxData = [
    {
      header: "Ringmaster",
      detail: "Job",
    },
    {
      header: "60 / 120",
      detail: "Level",
    },
    {
      header: "338 / 698",
      detail: "Points",
    },
  ];
  const descriptionBox = (header: string, detail: string) => {
    return (
      <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <p className={`m-0 max-w-[30ch] opacity-50`}>{detail}</p>
        <h2 className={`mb-3 text-2xl font-semibold`}>{header}</h2>
      </a>
    );
  };

  return (
    <div
      className={`mb-32 grid text-center lg:mb-0 lg:grid-cols-${descriptionBoxData.length} lg:text-left`}
    >
      {descriptionBoxData.map((data) =>
        descriptionBox(data.header, data.detail)
      )}
    </div>
  );
};
