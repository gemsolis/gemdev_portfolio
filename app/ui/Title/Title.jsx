import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-start gap-2">
        <h3>{title} </h3>
        <span className="gradient-bg h-[5px] w-full rounded-md"></span>
      </div>
      <p className="text-sm uppercase text-orange-500">/ {subtitle}</p>
    </div>
  );
};

export default Title;
