import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  const mainVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#271c45] via-[#4d4dff] to-[#00caf2] rounded-2xl mx-auto max-w-[95%] py-5">
      <div className="flex items-center justify-evenly p-10">
        <div className="space-y-7">
          <h2 className="text-white text-xl md:text-4xl font-black w-1/2">
            Share more. Build better.
          </h2>
          <motion.div
            ref={ref}
            variants={mainVariants}
            initial="initial"
            animate={mainControls}
            transition={{ ease: "backOut" }}
            className="flex items-center justify-center space-x-5"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="px-5 py-4 rounded-lg outline-none w-full shadow-lg"
            />
            <button className="bg-[#271c45] text-white rounded-xl text-sm font-semibold py-2 px-4 shadow-lg">
              Get an invite
            </button>
          </motion.div>
          <motion.div
            ref={ref}
            variants={mainVariants}
            initial="initial"
            animate={mainControls}
            transition={{ ease: "backOut" }}
            className="flex items-center text-white text-sm gap-10"
          >
            <div className="flex items-center gap-1">
              <img src="/verified.png" alt="" className="w-5 h-5 select-none" />
              <span>Invite only</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="/lock.png" alt="" className="w-5 h-5 select-none" />
              <span>Privacy testing</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="/magicstick.png" alt="" className="w-5 h-5 select-none" />
              <span>Help shape the product</span>
            </div>
          </motion.div>
        </div>
        <div className="hidden md:block relative top-10">
          <img
            src="https://framerusercontent.com/images/NdI7XlqHo5PV4fpjJ17mkXT0vs.png"
            alt=""
            className="w-[260px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
