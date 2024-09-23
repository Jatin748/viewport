import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import AnimatedDiv from "./AnimatedDiv";

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
    console.log(isInView);
  }, [isInView, mainControls]);

  return (
    <section className="mx-auto max-w-[90rem] bg-[#f1f3f5] rounded-3xl p-10">
      <div className="space-y-8 mx-auto max-w-2xl">
        <div className="flex items-center justify-center">
          <p className="uppercase text-sm font-semibold text-[#4d4dff] bg-[#4d4dff26] text-center px-2 py-1 rounded-lg">
            the solution
          </p>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-black text-center">
            A visual space to share and get feedback on your work as you design
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-4xl mt-16 space-y-20">
        <AnimatedDiv>
          <motion.div className="bg-white flex items-center justify-around rounded-2xl py-5">
            <img
              src="https://framerusercontent.com/images/WAGny5hdCqXGEKkE5iO2x3catI.png"
              alt=""
              className="rounded-2xl w-[400px] h-[300px] object-cover"
            />
            <div className="w-[40%] space-y-3">
              <p className="uppercase text-[#4d4dff] font-bold text-sm">
                quick post
              </p>
              <h3 className="text-3xl font-extrabold">
                Share work snippets quickly and secure
              </h3>
              <p className="text-[#7f8087]">
                Upload a WIP image to get better feedback from friends and
                colleagues
              </p>
            </div>
          </motion.div>
        </AnimatedDiv>
        <AnimatedDiv>
          <motion.div className="bg-white flex items-center justify-around rounded-2xl py-5">
            <div className="w-[42%] space-y-3">
              <p className="uppercase text-[#4d4dff] font-bold text-sm">
                projects
              </p>
              <h3 className="text-3xl font-extrabold">
                Share on-going projects in an organized space
              </h3>
              <p className="text-[#7f8087]">
                See your progress visually and bring others along as you design.
                Get context fast with different project views
              </p>
            </div>
            <img
              src="https://framerusercontent.com/images/r5LrPPIdcGzUrxBLz9qhO4R1W5Q.png"
              alt=""
              className="rounded-2xl w-[400px] h-[300px] object-cover"
            />
          </motion.div>
        </AnimatedDiv>
        <AnimatedDiv>
          <motion.div className="bg-white flex items-center justify-around rounded-2xl py-5">
            <img
              src="https://framerusercontent.com/images/IexoxOid4nUDDbpaF046ZOe5I.png"
              alt=""
              className="rounded-2xl w-[400px] h-[300px] object-cover"
            />
            <div className="w-[40%] space-y-3">
              <p className="uppercase text-[#4d4dff] font-bold text-sm">
                feedback
              </p>
              <h3 className="text-3xl font-extrabold">
                Get better feedback from people you trust
              </h3>
              <p className="text-[#7f8087]">
                Pin comments, draw on images, and get feedback to move your
                projects forward
              </p>
            </div>
          </motion.div>
        </AnimatedDiv>
        <AnimatedDiv>
          <motion.div className="bg-white flex items-center justify-around rounded-2xl py-5">
            <div className="w-[42%] space-y-3">
              <p className="uppercase text-[#4d4dff] font-bold text-sm">
                privacy
              </p>
              <h3 className="text-3xl font-extrabold">
                You're in control of who can see what
              </h3>
              <p className="text-[#7f8087]">
                Share publicly or privately, set expiration dates, and have
                confidence and control when sharing your ideas
              </p>
            </div>
            <img
              src="https://framerusercontent.com/images/3mVbeesA5gMUBMO2IdvwfHam98.png"
              alt=""
              className="rounded-2xl w-[400px] h-[300px] object-cover"
            />
          </motion.div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Solution;
