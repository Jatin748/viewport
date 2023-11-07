import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedDiv = (props) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when the element is in view
            controls.start("visible");
          }
        });
      },
      {
        threshold: 0.9, // Adjust the threshold as needed
      }
    );

    observer.observe(ref.current);

    return () => {
      // Clean up the observer when the component unmounts
      observer.unobserve(ref.current);
    };
  }, [controls]);
  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ type: "keyframes" }}
        {...props}
      />
    </div>
  );
};

export default AnimatedDiv;
