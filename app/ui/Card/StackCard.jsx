import Image from "next/image";

import { techIcons } from "@/app/data/constant";

const StackCard = ({ title }) => {
  const renderTechnologies = () => {
    if (title === "Frontend Development") {
      return Object.values(techIcons.frontend).map((technology) => (
        <div
          key={technology.text}
          className="flex flex-col flex-wrap items-center gap-3"
        >
          <Image
            src={technology.logo}
            width={40}
            height={40}
            className="max-sm:scale-75"
          />
          <span>{technology.text}</span>
        </div>
      ));
    } else if (title === "Backend Development") {
      return Object.values(techIcons.backend).map((technology) => (
        <div
          key={technology.text}
          className="flex flex-col flex-wrap items-center gap-3"
        >
          <Image
            src={technology.logo}
            width={40}
            height={40}
            className="max-sm:scale-75"
          />
          <span>{technology.text}</span>
        </div>
      ));
    } else if (title === "Tools") {
      return Object.values(techIcons.tools).map((technology) => (
        <div
          key={technology.text}
          className="flex flex-col flex-wrap items-center gap-3"
        >
          <Image
            src={technology.logo}
            width={40}
            height={40}
            className="max-sm:scale-75"
          />
          <span>{technology.text}</span>
        </div>
      ));
    } else if (title === "Design") {
      return Object.values(techIcons.design).map((technology) => (
        <div
          key={technology.text}
          className="flex flex-col flex-wrap items-center gap-3"
        >
          <Image
            src={technology.logo}
            width={40}
            height={40}
            className="max-sm:scale-75"
          />
          <span>{technology.text}</span>
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="glass-bg w-[33%] rounded-md p-5 max-lg:w-full">
      <div className="flex h-full flex-col gap-3">
        <span className="my-2 flex items-center gap-2 rounded-md">
          <Image src="/assets/gem-logo.png" width={20} height={20} />
          <h4 className="text-orange-400">{title}</h4>
        </span>
        <div className="my-3 flex flex-wrap items-center justify-center gap-10">
          {renderTechnologies()}
        </div>
      </div>
    </div>
  );
};

export default StackCard;
