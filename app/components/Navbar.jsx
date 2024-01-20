"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import SocialLinks from "../ui/Buttons/SocialLinks";
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
  
  const closeMenu= () => {
  setMenuToggle(false);
  }
  
  useEffect(() => {
  if (typeof window !== 'undefined') {
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
  }
}, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed left-0 top-0 z-50 flex h-[5%] w-[100vw] items-center justify-between overflow-x-hidden bg-transparent px-10 py-10 max-md:px-6"
    >
      <div className="glass-bg rounded-full px-3 py-1">
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
        <button className="glass-bg rounded-full p-2 z-[200]">
          {menuToggle ? (
            <CgClose size={20} onClick={handleToggle} />
          ) : (
            <CiMenuFries size={20} onClick={handleToggle} />
          )}
        </button>
      </div>
      {menuToggle && (
        <div className="glass-bg navAnim fixed top-0 left-0 z-[100] w-[100%] h-[100vh] flex flex-col justify-center items-center">
          <div className="rounded-full">
            {menuItems.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                onClick={closeMenu}
                className={`my-1 flex items-center justify-start gap-3 px-3 py-3 
              ${
                activeLink === link.url ? "active" : ""
              } origin-bottom duration-300 hover:scale-[1.1]`}
              >
                <span className="text-[22px] max-sm:text-[18px] max-md:text-[18px]">{link.icon}</span>
                <span className="text-[22px] max-sm:text-[18px] max-md:text-[18px]">{link.title}</span>
              </Link>
            ))}
          </div>
          <div className="absolute bottom-10 flex justify-center">
          <SocialLinks />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
