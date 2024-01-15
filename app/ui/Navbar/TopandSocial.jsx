"use client";

import TopButton from "../../ui/Buttons/TopButton";
import SocialLinks from "../../ui/Buttons/SocialLinks";
import { motion } from "framer-motion";

const TopandSocial = () => {
  return (
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
  );
};

export default TopandSocial;
