import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const imageAnimation = {
    initial: {
      y: 100,
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };
  const useAnimation1 = {
    initial: {
      x: 100,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
  };
  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);
  return (
    <div className="mx-auto max-w-[90rem] bg-[#f1f3f5] md:rounded-3xl p-10">
      <div className="space-y-7 p-4">
        <div className="flex items-center justify-center">
          <p className="uppercase text-sm font-semibold text-[#4d4dff] bg-[#4d4dff26] text-center px-2 py-1 rounded-lg">
            flexible use cases
          </p>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-extrabold text-center">
            Groups designed for public and private uses
          </h2>
        </div>
        <div className="grid md:flex md:items-center grid-cols-2 md:justify-center gap-3 md:gap-7">
          <motion.div
            ref={ref}
            initial="initial"
            animate={mainControls}
            variants={useAnimation1}
            transition={{ ease: "backOut", delay: 0.2 }}
            className="flex items-center bg-white px-3 py-2 rounded-xl space-x-2"
          >
            <div>
              <img
                src="/handshake.png"
                alt=""
                className="w-6 h-6 select-none"
              />
            </div>
            <div className="text-[#4d4dff] font-bold">Clients</div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="initial"
            animate={mainControls}
            variants={useAnimation1}
            transition={{ ease: "backOut", delay: 0.4 }}
            className="flex items-center bg-white px-3 py-2 rounded-xl space-x-2"
          >
            <div>
              <img src="/tree.png" alt="" className="w-6 h-6 select-none" />
            </div>
            <div className="text-[#4d4dff] font-bold">Teammates</div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="initial"
            animate={mainControls}
            variants={useAnimation1}
            transition={{ ease: "backOut", delay: 0.6 }}
            className="flex items-center bg-white px-3 py-2 rounded-xl space-x-2"
          >
            <div>
              <img src="/graduate.png" alt="" className="w-6 h-6 select-none" />
            </div>
            <div className="text-[#4d4dff] font-bold">Classmates</div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="initial"
            animate={mainControls}
            variants={useAnimation1}
            transition={{ ease: "backOut", delay: 0.8 }}
            className="flex items-center bg-white px-3 py-2 rounded-xl space-x-2"
          >
            <div>
              <img src="/people.png" alt="" className="w-6 h-6 select-none" />
            </div>
            <div className="text-[#4d4dff] font-bold">Close friends</div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="initial"
            animate={mainControls}
            variants={useAnimation1}
            transition={{ ease: "backOut", delay: 1 }}
            className="flex items-center bg-white px-3 py-2 rounded-xl space-x-2"
          >
            <div>
              <img src="/house.png" alt="" className="w-6 h-6 select-none" />
            </div>
            <div className="text-[#4d4dff] font-bold">Communities</div>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          initial="initial"
          animate={mainControls}
          variants={imageAnimation}
          transition={{ delay: 0.3, ease: "backOut" }}
          className="flex items-center justify-center origin-top"
        >
          <img
            src="https://framerusercontent.com/images/iik5zUNIaDVrTRg4dMo6AlEJDYE.png"
            alt=""
            className="md:w-[950px] md:h-[800px] object-contain rounded-xl select-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default UseCases;
