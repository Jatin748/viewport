import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const cardAnimation1 = {
    initial: {
      opacity: 0,
      scale: 0,
      x: 10,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: "-100px",
    },
  };
  const cardAnimation2 = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };
  const iconAnimation = {
    initial: {
      opacity: 0,
      x: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      x: "-90px",
      scale: 1,
    },
  };
  const reverseAnimation = {
    initial: {
      opacity: 1,
      scale: 1,
      rotate: "-10deg",
    },
    animate: {
      opacity: 0,
      scale: 0,
    },
  };
  return (
    // parent for section
    <section
      id="hero-section"
      className="flex items-center justify-center rounded-3xl bg-gradient-to-br from-[#271c45] via-[#4d4dff] to-[#00caf2] mx-auto max-w-sm md:max-w-[95%] h-screen "
    >
      {/* parent for flex */}
      <motion.div className="flex justify-around items-center mx-auto max-w-5xl">
        {/* left-hero-content-start */}
        <div className="text-white w-1/2 space-y-5">
          <h1 className="text-[32px] font-bold">
            Your design community for work-in-progress
          </h1>
          <p className="text-lg font-medium">
            Securely share new projects, create private spaces with friends, and
            get better feedback
          </p>
          <button className="bg-white text-[#4d4dff] px-8 py-5 rounded-xl font-semibold tracking-wide boxShadow transition-all duration-300">
            Get an invite {/* <div className="text-[#4d4dff]">&#10084;</div> */}
          </button>
        </div>
        {/* left-hero-content-end */}

        {/* right-hero-content-start */}
        <motion.div
          initial="initial"
          animate="initial"
          whileHover="animate"
          className="relative p-10"
        >
          <div className="relative bg-[#fff3] h-20 -top-12 rounded-b-2xl"></div>
          {/* disappear on hover-start */}
          <motion.div
            variants={reverseAnimation}
            className="absolute right-2/3 max-w-fit bg-black text-white px-1 py-1 rounded-lg text-sm origin-bottom-left"
          >
            <p>
              Hover for some magic!{" "}
              <span className="text-red-500">&#10084;</span>
            </p>
          </motion.div>
          {/* disappear on hover-end */}
          {/* appear on hover-start */}
          <motion.div
            variants={iconAnimation}
            className="p-2 space-y-4 absolute top-1/4 -right-[10%] origin-top-right"
          >
            <img
              src="https://framerusercontent.com/images/8F0utokf8WJ2AjnL6FMjkSS9s.png"
              alt="small-icon"
              className="w-12 h-12 rounded-xl select-none relative"
            />
            <img
              src="https://framerusercontent.com/images/0e4tTQZZjohoAr94Y3eLpRJ3KM.png"
              alt="small-icon"
              className="w-12 h-12 relative -ml-7 rounded-xl border-white border-2 bg-cyan-400 select-none"
            />
            <img
              src="https://framerusercontent.com/images/iD4geO99wLTkaAlp1IHizEBbD0.png"
              alt="small-icon"
              className=" w-12 h-12 relative -ml-2 rounded-xl select-none"
            />
            <img
              src="https://framerusercontent.com/images/VCOaARDBKiBQAKRbvDhvSkk1H58.png"
              alt="small-icon"
              className=" w-12 h-12 relative -ml-2 rounded-xl bg-green-400 select-none"
            />
          </motion.div>
          {/* appear on hover-end */}
          <img
            src="https://framerusercontent.com/images/jFUD5nD2EOu1szxHYseo0y8qM.png"
            alt="heroimage"
            className="w-[530px] h-[400px] block object-cover object-center overflow-clip rounded-2xl rounded-b-none select-none cursor-pointer"
          />

          {/* appear on hover-start */}
          <div>
            <motion.div
              variants={cardAnimation1}
              className="absolute -left-5 flex items-center shadow-lg bg-white gap-2 px-3 py-2 rounded-2xl origin-bottom"
            >
              <img
                src="https://framerusercontent.com/images/0e4tTQZZjohoAr94Y3eLpRJ3KM.png"
                alt=""
                className="w-12 h-12 select-none bg-cyan-400 rounded-xl"
              />
              <div className="space-y-3">
                <div className="bg-gray-300 h-3 w-28 rounded-2xl"></div>
                <div className="bg-gray-300 h-3 w-20 rounded-2xl"></div>
              </div>
            </motion.div>
            <motion.div
              variants={cardAnimation2}
              className="absolute top-20 right-0 flex items-center shadow-lg bg-white gap-2 px-3 py-2 rounded-2xl origin-bottom-left"
            >
              <img
                src="https://framerusercontent.com/images/0e4tTQZZjohoAr94Y3eLpRJ3KM.png"
                alt=""
                className="w-12 h-12 select-none bg-cyan-400 rounded-xl"
              />
              <div className="space-y-3">
                <div className="bg-gray-300 h-3 w-28 rounded-2xl"></div>
                <div className="bg-gray-300 h-3 w-20 rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
          {/* appear on hover-end */}
          <div className="flex items-center bg-white rounded-b-2xl p-5 gap-4">
            <img
              src="https://framerusercontent.com/images/lC7M16sbhKpPdRADsrvSkGFaHo.png"
              alt="icon"
              className="w-10 bg-[#7427fa99] rounded-lg select-none"
            />
            <span className="font-bold text-lg">
              Updated the 3D logo. Thoughts?
            </span>
          </div>
          <div className="relative bg-[#fff3] h-20 -bottom-12 rounded-t-2xl"></div>
        </motion.div>
        {/* right-hero-content-end */}
      </motion.div>
    </section>
  );
};

export default Hero;
