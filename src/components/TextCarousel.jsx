import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { items } from "../database/item";
export const TextCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === items.length - 1 ? 0 : prevSlide + 1
    );
  };

  const onPrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? items.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative mt-[150px] mx-10">
      {/** Slides Data */}
      <div className="my-4 flex flex-col items-center">
        <h3 className="text-white text-center text-2xl font-bold mb-10">
          {items[currentSlide].title}
        </h3>
        <h1 className="text-white text-center text-7xl font-bold mb-10">
          {items[currentSlide].subtitle}
        </h1>
        <h5 className="text-white text-2xl text-center w-[700px] mb-10">
          {items[currentSlide].description}
        </h5>
      </div>

      {/** Navigation Buttons */}
      <div className="flex items-center justify-center">
        <button
          onClick={onPrev}
          className="absolute left-0 top-[110px] transform -translate-y-1/2 focus:outline-none"
        >
          <ChevronLeftIcon className="h-10 w-10 text-white" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-[110px] transform -translate-y-1/2 focus:outline-none"
        >
          <ChevronRightIcon className="h-10 w-10 text-white" />
        </button>

        {/** Pagination */}
        <div className="flex space-x-5">
          {items.map((item, idx) => (
            <button
              key={idx}
              className={`rounded-full h-3 w-3 ${
                currentSlide === idx
                  ? "bg-white"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(idx)}
            ></button>
          ))}
        </div>
      </div>

      {/** Button */}
      <button className="mt-20 w-[230px] h-[60px] text-white text-lg font-medium left-[50% - 160px/2] top-[50% - 26px/2] bg-[#482BE7] rounded-3xl">
        Create an Account
      </button>
    </div>
  );
};
