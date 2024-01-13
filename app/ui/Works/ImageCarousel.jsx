"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://placekitten.com/400/300",
  "https://placekitten.com/401/300",
  "https://placekitten.com/402/300",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative m-10 w-[60%]">
      <div className="h-[500px] overflow-hidden rounded-md">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          className="h-auto w-full"
        />
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
        <button
          onClick={handlePrev}
          className="rounded-full bg-gray-800 p-2 text-white"
        >
          <FaChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 transform">
        <button
          onClick={handleNext}
          className="rounded-full bg-gray-800 p-2 text-white"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
