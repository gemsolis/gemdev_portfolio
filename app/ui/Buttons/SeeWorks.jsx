import Link from "next/link";
import React from "react";
import { GoFoldDown } from "react-icons/go";

const SeeWorks = () => {
  return (
    <Link href="#works">
      <button className="flex flex-col items-center justify-center gap-3">
        <span className="pulsate rounded-full glass-bg p-2 text-center text-white hover:text-orange-500">
          <GoFoldDown size={30} />
        </span>
        <span className="rounded-full glass-bg px-2 py-1 text-[14px] text-white hover:text-orange-500">
          See Works
        </span>
      </button>
    </Link>
  );
};

export default SeeWorks;
