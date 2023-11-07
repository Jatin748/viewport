import React from "react";

const Header = () => {
  return (
    <header className="sticky md:top-10 bg-white mx-auto max-w-4xl md:mt-10 py-5 px-5 rounded-2xl z-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-1 md:gap-2 md:w-full">
          <a href="/">
            <img
              src="https://framerusercontent.com/images/Aj6HnALChKUkzgmcyVJo3wkALJQ.png"
              alt="heroimage"
              className="w-24 md:w-36 select-none"
            />
          </a>
          <a
            href="/"
            className="uppercase text-[5px] md:text-[7px] text-[#4d4dff] font-bold bg-[#4d4dff26] px-2 py-1 rounded-md select-none"
          >
            alpha
          </a>
        </div>
        <div className="flex justify-evenly md:w-1/2">
          <button className="text-xs md:text-sm font-bold hover:bg-gray-200 px-3 py-1 md:px-5 md:py-2 rounded-xl transition-colors">
            Sign in
          </button>
          <button className="border text-xs md:text-sm hover:bg-gray-300 px-3 py-1 md:px-5 md:py-2 rounded-xl font-bold transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
