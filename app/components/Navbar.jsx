"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ThemeToggle from "../ui/Navbar/ThemeToggle";
import { menuItems } from "../data/constant";
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleToggle = () => {
    setMenuToggle((prevState) => !prevState);

    setTimeout(() => {
      setMenuToggle(false);
    }, 50000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      menuItems.forEach((link) => {
        const section = document.querySelector(link.url);

        if (section) {
          const offset = section.offsetTop;
          const height = section.offsetHeight;
          const sectionScope = offset * height;

          if (scrollPosition >= offset && scrollPosition <= sectionScope) {
            setActiveLink(link.url);
          }
        }
      });

      const heroSection = document.querySelector("#hero");
      if (heroSection && scrollPosition < heroSection.offsetHeight) {
        setActiveLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed left-0 top-0 z-50 flex h-[5%] w-[100vw] items-center justify-between overflow-x-hidden bg-transparent px-10 py-10 max-md:px-6"
    >
      <div className="glass-bg dark:dark-glass-bg rounded-full px-3 py-1">
        <Link href="/">
          <h1 className="flex flex-1 items-center gap-2">
            <Image
              src="/assets/gem-logo.png"
              alt="Gem.Dev"
              width={40}
              height={40}
            />
            <span className="font-black">GEM.DEV</span>
          </h1>
        </Link>
      </div>
      <div className=" flex items-center gap-5 ">
        <span className="glass-bg dark:dark-glass-bg rounded-full px-3 py-1">
          <ThemeToggle />
        </span>
        {menuToggle && (
          <div className="custom-bg navAnim fixed right-[27px] top-16 z-50 rounded-full shadow-lg max-md:right-[15px]">
            <div className="gradient-bg rounded-full py-1 ">
              {menuItems.map((link) => (
                <Link
                  href={link.url}
                  key={link.title}
                  className={`text-white-400 my-1 flex flex-col items-center justify-center px-2 py-3 
              ${
                activeLink === link.url ? "active" : ""
              } duration-300 hover:scale-[1.1]`}
                >
                  <span>{link.icon}</span>
                  <span className="text-sm max-md:text-xs ">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
        <button className="glass-bg rounded-full p-2">
          {menuToggle ? (
            <CgClose size={20} onClick={handleToggle} />
          ) : (
            <CiMenuFries size={20} onClick={handleToggle} />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
