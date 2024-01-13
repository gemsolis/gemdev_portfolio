import Link from "next/link";
import React from "react";
import { GoFoldDown } from "react-icons/go";

const SeeWorks = () => {
  return (
    <Link href="#works">
      <button className="flex flex-col items-center justify-center gap-3">
        <span className="pulsate rounded-full bg-slate-800 p-2 text-center text-white hover:text-orange-500">
          <GoFoldDown size={30} />
        </span>
        <span className="rounded-full bg-slate-800 px-2 py-1 text-[14px] text-white hover:text-orange-500">
          See Works
        </span>
      </button>
    </Link>
  );
};

export default SeeWorks;
