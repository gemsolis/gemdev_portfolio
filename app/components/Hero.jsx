"use client";
import Link from "next/link";
import CustomButton from "../ui/Buttons/CustomButton";
import SocialLinks from "../ui/Buttons/SocialLinks";

import SeeWorks from "../ui/Buttons/SeeWorks";
import { motion } from "framer-motion";
import TopButton from "../ui/Buttons/TopButton";

const Hero = () => {
  return (
    <motion.div>
      <div className="custom-bg custom-padding flex  h-[100vh] flex-col justify-center">
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="g-text"
        >
          Hello!
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, x: "200px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-black uppercase text-orange-500"
        >
          I'm Gem Solis.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="p-text w-[50%] max-md:w-[70%]"
        >
          I am an aspiring front-end developer based in the Philippines,
          specializing in crafting engaging Web Experiences with REACT and a
          passion for Innovative Design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-5 flex items-center gap-4 "
        >
          <Link
            href="https://drive.google.com/file/d/1H9ZCi85a8gemQM7Lb5oV1TUhaDK-gUlD/view?usp=sharing"
            target="_blank"
          >
            <CustomButton
              title="Download CV"
              containerStyles="bg-orange-500 border-2 hover:rounded-xl"
            />
          </Link>
          <Link href="#contacts">
            <CustomButton
              title="Contact Me"
              containerStyles="glass-bg border-2 hover:rounded-xl"
            />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{
          x: "200px",
          y: 0,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="fixed bottom-16 right-[33px] z-50 flex flex-col items-center justify-center gap-2 max-md:right-[20px]"
      >
        <SocialLinks />
        <TopButton />
      </motion.div>
      <div className="absolute bottom-10 flex w-full justify-center">
        <SeeWorks />
      </div>
    </motion.div>
  );
};

export default Hero;
