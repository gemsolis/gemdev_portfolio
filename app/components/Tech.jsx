"use client";

import { useState, useEffect, useRef } from "react";
import { containerVariants, fadeUpVariants } from "../data/variants";
import { motion } from "framer-motion";
import Title from "../ui/Title/Title";
import StackCard from "../ui/Card/StackCard";

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="technologies" className="custom-padding w-full">
      <Title title="Tech Stack" subtitle="Technologies I learned" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        ref={elementRef}
      >
        <motion.div
          variants={fadeUpVariants}
          className="my-10 flex w-full flex-wrap justify-center gap-4 max-lg:flex-col"
        >
          <StackCard title="Frontend Development" />
          <StackCard title="Tools" />
          <StackCard title="Backend Development" />
          <StackCard title="Design" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
