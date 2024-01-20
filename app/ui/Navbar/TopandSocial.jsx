"use client";

import TopButton from "../../ui/Buttons/TopButton";
import SocialLinks from "../../ui/Buttons/SocialLinks";
import { motion } from "framer-motion";

const TopandSocial = () => {
  return (
    <motion.div
      initial={{
        x: "0",
        y: "200px",
        opacity: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed bottom-10 right-[30px] z-[20] flex flex-col items-center justify-center gap-2 max-md:right-[20px]"
    >
      <TopButton />
    </motion.div>
  );
};

export default TopandSocial;
