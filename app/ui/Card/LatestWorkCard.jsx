import Image from "next/image";
import CustomButton from "../Buttons/CustomButton";
import Link from "next/link";

const LatestProjectCard = ({ title, details }) => {
  return (
    <div className="glass-bg flex flex-col  rounded-md">
      <div className="flex items-center justify-center gap-5 p-5 max-md:flex-col">
        <Image
          src="/assets/work_admin.png"
          width={350}
          height={350}
          className="rounded-md"
        />
      </div>
      <div className="glass-bg m-5 flex flex-col p-5 max-md:flex-col">
        <span className="mb-2 flex items-center gap-2 max-md:flex-col">
          <Image src="/assets/gem-logo.png" width={20} height={20} />
          <h3 className="text-orange-500">{title}</h3>
        </span>
        <div className="max-sm:justify-center2 my-5 flex flex-wrap gap-2">
          <span className="rounded-full border-2 border-orange-400 px-2 py-1 text-[12px]">
            NextJS
          </span>
          <span className="rounded-full border-2 border-orange-400 px-2 py-1 text-[12px]">
            MongoDB
          </span>
          <span className="rounded-full border-2 border-orange-400 px-2 py-1 text-[12px]">
            TailwindCSS
          </span>
          <span className="rounded-full border-2 border-orange-400 px-2 py-1 text-[12px]">
            AuthJS
          </span>
        </div>
        <p className="mb-5 text-sm">{details}</p>
        <div className="flex gap-2 self-end">
          <Link
            href="https://admin-dashboard-nextjs-swrx.vercel.app/login"
            target="_blank"
          >
            <CustomButton
              title="View Site"
              containerStyles="bg-orange-500 border-2 hover:rounded-lg"
            />
          </Link>
          <Link
            href="https://github.com/gemsolis/admin-dashboard-nextjs"
            target="_blank"
          >
            <CustomButton
              title="Github Repo"
              containerStyles="glass-bg border-2 hover:rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProjectCard;
