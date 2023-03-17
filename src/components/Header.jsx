import React from "react";
import { CiBasketball } from "react-icons/ci";

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-center">
        <ul className="flex items-center text-white gap-10 mt-[85px] text-lg leading-7 mb-4">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>
            <CiBasketball />
          </li>
          <li>Be</li>
        </ul>
      </nav>
    </header>
  );
};
