"use client";
import { useEffect, useState, useRef } from "react";
import InfoCard from "../ui/Card/InfoCard";
import LatestWorkCard from "../ui/Card/LatestWorkCard";
import Title from "../ui/Title/Title";
import ContactInfo from "../ui/About/ContactInfo";
import { motion } from "framer-motion";

const About = () => {
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
    <div id="about" className="g-padding bg-no-repeat">
      <Title title="About Me" subtitle="Get to Know me" />
      <motion.div
        ref={elementRef}
        transition={{ delay: 1, duration: 1 }}
        className="g-margin flex h-full items-start justify-between gap-10 max-lg:flex-col"
      >
        <motion.div
          initial={{ opacity: 0, x: "-200px" }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : "-200px",
          }}
          transition={{ delay: 0, duration: 0.5 }}
        >
          <InfoCard />
          <ContactInfo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : "100px",
          }}
          transition={{ delay: 0, duration: 1 }}
          className="flex flex-col gap-3 "
        >
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
