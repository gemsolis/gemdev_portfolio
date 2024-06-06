import Image from "next/image";
import React from "react";

const InfoCard = () => {
  return (
    <div className="glass-bg h-[full] flex-col rounded-lg">
      <div className="custom-bg h-[150px] rounded-t-lg"></div>
      <div className="mt-[-50px] flex items-center justify-center self-center overflow-hidden">
        <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full">
          <Image
            src="/assets/portrait-1.png"
            width={200}
            height={200}
            className="absolute bottom-[-10px] rounded-full object-contain"
            alt="Gem Solis"
          />
        </div>
      </div>
      <div className="g-padding my-2">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Image src="/assets/gem-logo.png" width={20} height={20} />
          <h3 className="text-orange-500">Welcome to my Portfolio!</h3>
        </div>
        <div className="text-left">
          <p className="pb-2">
          I'm a passionate front-end web developer trained at Village88, a prestigious bootcamp known for its rigorous curriculum. I specialize in HTML, CSS, and JavaScript, creating engaging and user-friendly websites.
          </p>
          <p className="pb-2">
          I mastered responsive layouts, web performance optimization, and cross-device compatibility. I also developed a keen eye for design, transforming wireframes into stunning and intuitive interfaces.
          </p>
          <p className="pb-2">
          As a lifelong learner, I stay current with industry trends and advancements, always eager to explore new technologies, frameworks, and libraries to enhance my skills and deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
