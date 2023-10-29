import Image from "next/image";
import { useAppContext } from "../components/context";
import { wordCapitalize } from "../helper/helper";
import { JOB } from "../data/enum";

export const JobChangeMenu = () => {
  const { jobChangeMenu, setJobChangeMenu } = useAppContext();
  const transitionStyle = `transition-transform motion-reduce:transform-none ease-in-out duration-500`;

  const classList = [
    JOB.KNIGHT,
    JOB.BLADE,
    JOB.RANGER,
    JOB.JESTER,
    JOB.ELEMENTOR,
    JOB.PSYCHIKEEPER,
    JOB.RINGMASTER,
    JOB.BILLPOSTER,
  ];

  const jobDisplay = () =>
    classList.map((job, index) => {
      return (
        <div key={index} className="flex flex-col w-1/12 items-center group">
          <Image
            className={`${transitionStyle} w-full object-fit group-hover:scale-110`}
            src={`/class/target/${job}.png`}
            alt="jobMenuTargetImage"
            width={33}
            height={33}
            draggable={false}
            onClick={() => alert(job)}
          />
          <span className="font-bold">{wordCapitalize(job)}</span>
        </div>
      );
    });

  return jobChangeMenu ? (
    <div className="fixed z-50 inset-0 overflow-y-auto cursor-default">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={() => setJobChangeMenu(false)}
        >
          <div className="flex flex-col  relative top-1/3 justify-center">
            <span className="font-bold mb-6">Select your class</span>
            <div className="flex flex-row  relative top-1/3 justify-center cursor-pointer">
              {jobDisplay()}
            </div>
          </div>
        </div>
        di
      </div>
    </div>
  ) : null;
};
