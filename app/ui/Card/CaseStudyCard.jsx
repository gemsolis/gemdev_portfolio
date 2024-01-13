"use client";

import { useState, useEffect, useRef } from "react";
import { containerVariants, fadeUpVariants } from "../../data/variants";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../Buttons/CustomButton";
import Title from "../Title/Title";
import { motion } from "framer-motion";

const CaseStudyCard = () => {
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
    <div className="g-margin my-10">
      <Title title="UX Case Study" subtitle="Crafted UX Research" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        ref={elementRef}
        className="glass-bg mt-10 flex items-center justify-around gap-5 rounded-md max-lg:flex-col"
      >
        <motion.div
          variants={fadeUpVariants}
          className="flex w-[100%] justify-center px-5"
        >
          <Image
            src="/assets/casestudy-photo.png"
            alt="Aurras App"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>
        <motion.div variants={fadeUpVariants} className="p-[3vw]">
          <h3 className="my-5 text-orange-500">About Aurras App</h3>
          <p className="mb-5">
            Aurras is a music player application that offers instrumental
            streaming services and is built for artist to showcase their crafted
            music. It also has a feature that let the users add environmental
            sounds, pure waves, and happiness frequency in the background to
            serve therapeutic and meditative purpose to the listeners.
          </p>
          <div className="flex items-center justify-between gap-2 px-2 py-3 max-sm:flex-col max-sm:items-start">
            <div className="glass-bg flex gap-4 rounded-md px-2 py-2">
              <Image
                src="/assets/logo/figma.png"
                alt="Figma"
                width={30}
                height={30}
                className="object-contain max-md:scale-[0.7]"
              />
              <Image
                src="/assets/logo/xd.png"
                alt="Adobe XD"
                width={30}
                height={30}
                className="object-contain max-md:scale-[0.7]"
              />
            </div>
            <div>
              <Link
                href="https://www.behance.net/gallery/117264097/Aurras-Instrumental-Music-Player-Case-Study"
                target="_blank"
              >
                <CustomButton
                  title="View Dashboard"
                  containerStyles="bg-orange-500 text-white border-2 hover:rounded-xl"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CaseStudyCard;
