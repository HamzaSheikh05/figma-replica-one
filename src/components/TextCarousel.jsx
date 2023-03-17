import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export const TextCarousel = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
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
    <div className="relative mt-[253px] mx-10">
      {/** Slides Data */}
      <div className="my-4">
        <p className="text-center text-2xl font-bold">{items[currentSlide]}</p>
      </div>

      {/** Navigation Buttons */}
      <div className="flex items-center justify-center">
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/** Pagination */}
        <div className="flex space-x-5">
          {items.map((item, idx) => (
            <button
              key={idx}
              className={`rounded-full h-3 w-3 ${
                currentSlide === idx
                  ? "bg-blue-500"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(idx)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
