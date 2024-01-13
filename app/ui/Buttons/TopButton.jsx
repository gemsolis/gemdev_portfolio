"use client";
import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Link from "next/link";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Link href="#home">
      <button
        className={`glass-bg rounded-full p-2 duration-200 hover:text-orange-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <MdKeyboardDoubleArrowUp size={20} />
      </button>
    </Link>
  );
};

export default TopButton;
