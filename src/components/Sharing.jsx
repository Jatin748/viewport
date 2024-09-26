import React from "react";
import { motion } from "framer-motion";
const Sharing = () => {
  const imageAnimation = {
    initial: {
      y: 0,
    },
    animate: {
      y: -15,
    },
  };
  const divAnimation = {
    initial: {
      x: 0,
    },
    animate: {
      x: -15,
      y: -15,
    },
  };
  const sectionAnimation = {
    initial: {
      y: 0,
    },
    animate: {
      y: -15,
    },
  };
  const singleSectionAnimation = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
    },
  };
  return (
    <div className="mx-auto max-w-4xl space-y-7 hidden md:block">
      <div className="space-y-7 p-4">
        <div className="flex items-center justify-center">
          <p className="uppercase text-sm font-semibold text-[#4d4dff] bg-[#4d4dff26] text-center px-2 py-1 rounded-lg">
            ways to share
          </p>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-extrabold text-center">
            Quick, easy, & secure
          </h2>
        </div>
      </div>
      {/* second part start */}
      <motion.div className="md:flex gap-10 text-center max-w-sm md:max-w-full mx-auto space-y-7 md:space-y-0">
        <motion.div
          initial="initial"
          animate="initial"
          whileHover="animate"
          className="bg-[#f1f3f5] rounded-2xl hover:shadow-lg transition-all hover:border-2 cursor-pointer"
        >
          <div className="p-4 space-y-4">
            <span className="font-bold text-xl">Posts</span>
            <p className="text-sm text-[#7f8087]">
              Quickly share early ideas and snippets as you design
            </p>
          </div>
          <motion.div
            variants={imageAnimation}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="overflow-hidden"
          >
            <img
              src="https://framerusercontent.com/images/xHmt7SyM50Tglu7JoiCYehNX1Y0.png"
              alt=""
              className="rounded-xl w-[500px] h-[230px] relative -left-14 top-10"
            />
            <div className="w-4 h-4 bg-blue-700 rounded-md absolute -translate-y-14 translate-x-14"></div>
            <div className="bg-white py-3 px-3 flex items-center gap-3 border-2 border-[#00CAF2] relative -top-12 left-16 rounded-2xl max-w-max">
              <div className="rounded-lg bg-[#a795fd] h-10 w-10"></div>
              <div>
                <div className="h-3 bg-gray-200 rounded-2xl w-20"></div>
                <span className="text-xs font-bold">Move this over here</span>
              </div>
              <div></div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="initial"
          animate="initial"
          whileHover="animate"
          className="bg-[#f1f3f5] rounded-2xl p-10 space-y-2 hover:shadow-lg transition-all hover:border-2 overflow-hidden cursor-pointer"
        >
          <div className="space-y-4 relative -top-6">
            <span className="font-bold text-xl">Projects</span>
            <p className=" text-sm text-[#7f8087]">
              Organize and get feedback for on-going projects
            </p>
          </div>
          <motion.div
            variants={imageAnimation}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="space-y-4 absolute w-[60%] md:w-[13%]"
          >
            <div className="bg-white rounded-xl py-2 px-4 space-y-2">
              <div className="bg-[#c8c9cf] h-2 rounded-xl"></div>
              <div className="bg-[#c8c9cf] h-2 rounded-xl w-3/4"></div>
            </div>
            <div className="bg-[#c8c9cf] rounded-xl h-10"></div>
            <div className="bg-[#c8c9cf] rounded-xl h-[140px]"></div>
          </motion.div>
          <motion.div
            variants={divAnimation}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="relative left-32 md:left-10 bottom-14 origin-top-left"
          >
            <div className="bg-[#4d4dff] w-24 h-24 rounded-xl -rotate-12 absolute top-[180px] left-16 shadow-lg"></div>
            <div className="bg-[#a795fd] w-24 h-24 rounded-xl rotate-9 absolute top-[170px] left-24 shadow-lg"></div>
            <div className="bg-[#18ecbc] w-24 h-24 rounded-xl rotate-12 absolute top-[180px] left-32 shadow-lg"></div>
            <img
              src="https://framerusercontent.com/images/SW91Lv3PNLPkqroGpeE3o38IA8.png"
              alt=""
              className="w-10 h-10 absolute top-[250px] left-28"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="initial"
          animate="initial"
          whileHover="animate"
          className="bg-[#f1f3f5] rounded-2xl py-5 px-7 space-y-10 hover:shadow-lg transition-all hover:border-2 cursor-pointer"
        >
          <div className="space-y-3">
            <span className="font-bold text-xl">Groups</span>
            <p className=" text-sm text-[#7f8087]">
              Organize posts, projects and people in specific spaces
            </p>
          </div>
          <motion.div
            variants={sectionAnimation}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="space-y-5 bg-[#e3e6ec] rounded-xl p-3"
          >
            <div className="space-y-5">
              <motion.div
                variants={singleSectionAnimation}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="bg-white flex items-center gap-2 p-3 rounded-2xl shadow-2xl relative left-1"
              >
                <div className="bg-[#00caf2] h-10 w-10 rounded-md"></div>
                <div className="text-[#7f8087]">
                  <span className="text-sm font-extrabold text-black">
                    The OG crew
                  </span>
                  <div className="text-xs font-bold flex items-center justify-center space-x-1">
                    <span>12 posts</span>
                    <span className="rounded-full w-1 h-1 bg-[#7f8087]"></span>
                    <span>3 people</span>
                  </div>
                </div>
              </motion.div>
              <div className="bg-white flex items-center gap-3 p-3 rounded-2xl shadow-xl">
                <div className="bg-[#a795fd] h-10 w-10 rounded-md"></div>
                <div className="space-y-2">
                  <div className="bg-[#7f8087] h-3 w-24 rounded-2xl"></div>
                  <div className="bg-[#e3e6ec] h-3 w-12 rounded-2xl"></div>
                </div>
              </div>
              <div className="bg-white flex items-center gap-3 p-3 rounded-2xl shadow-xl">
                <div className="bg-[#18ecbc] h-10 w-10 rounded-md"></div>
                <div className="space-y-2">
                  <div className="bg-[#7f8087] h-3 w-24 rounded-2xl"></div>
                  <div className="bg-[#e3e6ec] h-3 w-12 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* second part end */}
    </div>
  );
};

export default Sharing;
