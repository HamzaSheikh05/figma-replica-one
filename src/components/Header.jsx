import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-center">
        <ul className="flex text-white gap-10 mt-[85px] text-lg leading-7 mb-4">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Ball</li>
          <li>Be</li>
        </ul>
      </nav>
    </header>
  );
};
