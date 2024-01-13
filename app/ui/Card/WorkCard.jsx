"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, cardVariants } from "../../data/variants";
import { projects } from "../../data/constant";
import CustomButton from "../Buttons/CustomButton";

const WorkCard = () => {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      ref={elementRef}
      className="project-grid g-margin h-full  w-full cursor-pointer"
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={cardVariants}
          className="glass-bg dark:dark-glass-bg relative rounded-lg"
        >
          <div className="w-full overflow-hidden rounded-lg">
            <div className="w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={600}
                className="object-contain"
              />
            </div>

            <div className="mb-5 px-5 py-4">
              <h4 className="project-text font-black text-orange-400">
                {project.title}
              </h4>
              <div className="item-center my-5 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span className="rounded-full border-2 border-orange-500 px-2 py-1 text-[11px]">
                    {item}
                  </span>
                ))}
              </div>
              <p className="custom-p mb-10">{project.description}</p>
            </div>
          </div>
          <div className="absolute bottom-3 right-5 z-20 flex gap-3">
            <Link href={project.site} target="_blank">
              <CustomButton
                title="View Site"
                containerStyles="bg-orange-500 border-2 hover:rounded-xl"
              />
            </Link>
            <Link href={project.github} target="_blank">
              <CustomButton
                title="Github Repo"
                containerStyles="glass-bg border-2 hover:rounded-xl"
              />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WorkCard;
