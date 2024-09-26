import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const Review = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  const imageVariants = {
    initial: {
      y: "100vh",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  const iconVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  const reviewVariants1 = {
    initial: {
      scale: 0,
      rotate: "4deg",
      y: "-5px",
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  const reviewVariants2 = {
    initial: {
      scale: 0,
      rotate: "3deg",
      y: "40px",
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  const reviewVariants3 = {
    initial: {
      scale: 0,
      rotate: "-3deg",
      y: "30px",
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  const reviewVariants4 = {
    initial: {
      scale: 0,
      rotate: "-3deg",
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  const reviewVariants5 = {
    initial: {
      scale: 0,
      rotate: "-2deg",
      y: "35px",
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  const reviewVariants6 = {
    initial: {
      scale: 0,
      rotate: "-1deg",
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  const reviewVariants7 = {
    initial: {
      scale: 0,
      rotate: "-1deg",
      y: "-75px",
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <section className="mx-auto max-w-3xl flex-col justify-center items-center pt-10">
      <div className="space-y-10 p-4">
        <div className="flex items-center justify-center">
          <p className="uppercase text-sm font-semibold text-[#4d4dff] bg-[#4d4dff26] text-center px-2 py-1 rounded-lg">
            the problem
          </p>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold text-center">
            Current creative platforms make it impossible to get actual feedback
            on your work.
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center my-32 relative">
        <motion.img
          variants={imageVariants}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 0.1,ease: "easeInOut" }}
          src="https://framerusercontent.com/images/jWaPzh2D1RpJ1LMTCgj6fboghRI.jpg"
          alt="reviewimage"
          className="select-none w-[350px] md:w-[400px] h-[200px] rounded-3xl"
        />
        <motion.svg
          ref={ref}
          variants={iconVariants}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 0.3, ease: "easeInOut" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          // color="rgb(255,255,255)"
          className="w-12 h-12 absolute text-white"
        >
          <g fill="white" weight="fill">
            <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"></path>
          </g>
        </motion.svg>
        <motion.div
          ref={ref}
          variants={reviewVariants1}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 0.5, ease: "easeInOut" }}
          className="bg-[#f1f3f5] absolute -top-[20%] md:-top-[27%] right-[50%] md:right-[67%] rounded-full p-2 rotate-2"
        >
          <span className="text-2xl font-semibold select-none flex items-center justify-center">
            &#128293;
            <p className="text-xs md:text-sm m-1">
              DM US &#128525; @Designz4lyfe &#11088;
            </p>
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          variants={reviewVariants2}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 0.7, ease: "easeInOut" }}
          className="bg-[#f1f3f5] absolute bottom-0 translate-y-10 right-[3.5%] md:right-[3%] rounded-full px-2 md:px-4 py-2 rotate-3"
        >
          <span className="text-2xl font-semibold select-none flex items-center justify-center gap-2">
            <img
              src="https://framerusercontent.com/images/sP0zSZJnDxp1xg16x2GrGAWj1ag.png"
              alt=""
              className="w-7 h-7 rounded-full"
            />
            <span className="text-xs md:text-sm m-1">What do you think of my work???</span>
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          variants={reviewVariants3}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 1.3, ease: "easeInOut" }}
          className="bg-[#f1f3f5] absolute bottom-10 md:bottom-0 right-[28%] md:right-[63%] rounded-full px-3 md:px-4 py-2 -rotate-3"
        >
          <span className="flex items-center justify-center text-2xl font-bold gap-2">
            &#128525;
            <div className="text-xs md:text-sm">
              <p>Good, dear friends pls rate my artwork:</p>
              <p>https://nfts4everyone.com/token/0x60f801a</p>
            </div>
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          variants={reviewVariants4}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 1.1, ease: "easeInOut" }}
          className="bg-[#f1f3f5] absolute top-10 left-[2%] md:left-[0%] translate-x-5 rounded-full px-4 py-2 -rotate-3"
        >
          <span className="flex items-center justify-center gap-2">
            <img
              src="https://framerusercontent.com/images/wvcy3CnY7YzJDjKfINb4GufOw.png"
              alt=""
              className="w-7 h-7 rounded-full"
            />
            <span className="text-xs md:text-sm font-bold">I guess it's cool</span>
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          variants={reviewVariants5}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 1.1, ease: "easeInOut" }}
          className="bg-[#f1f3f5] absolute right-[1%] md:right-[12%] bottom-24 rounded-full px-4 py-2 -rotate-3"
        >
          <span className="flex items-center justify-center gap-1 text-2xl">
            &#128529;<p className="font-bold text-xs md:text-sm">I don't get it</p>
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          variants={reviewVariants6}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 1.3, ease: "easeInOut" }}
          className="bg-[#f1f3f5] absolute top-5 left-[40%] rounded-full px-4 py-2 -rotate-1"
        >
          <span className="flex items-center gap-2">
            <img
              src="https://framerusercontent.com/images/ULZVGeIPFJYMCiE0taJTCHrRd8E.png"
              alt=""
              className="w-7 h-7 rounded-full"
            />
            <span className="font-semibold text-xs md:text-sm">
              AMAZING!!! &#128293;&#128525; Promote it on &#128073;
              @ART.online_WORLD
            </span>
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          variants={reviewVariants7}
          initial="initial"
          animate={mainControls}
          transition={{ delay: 0.5, ease: "easeInOut" }}
          className="bg-[#f1f3f5] absolute top-0 -translate-y-16 left-[55%] rounded-full px-4 py-2 -rotate-1"
        >
          <span className="flex items-center justify-center gap-2 text-2xl">
            &#128064;
            <p className="font-bold text-xs md:text-sm">Is this the newest version?</p>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
