import React from "react";
import { motion } from "framer-motion";
import "./../App.css";
const marqueeVariants = {
  animate: {
    y: [500, -1000],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
const marqueeVariantsSecond = {
  animate: {
    y: [500, 900],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "linear",
      },
    },
  },
};
const WorkImageSlide = () => {
  return (
    <div className="sliderContainer">
      <div className="marquee">
        {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="slideImages">
            <img
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1636617935/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2021-11-05_184609_tg8huc.jpg"
              alt="img1"
            />
            <img
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1636776988/%EC%9B%B9_%EC%BA%A1%EC%B2%98_12-11-2021_21144_localhost_lzpfr3.jpg"
              alt="img1"
            />
            <img
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1636776988/%EC%9B%B9_%EC%BA%A1%EC%B2%98_12-11-2021_211259_localhost_qornqp.jpg"
              alt="img1"
            />
            <img
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1636776987/%EC%9B%B9_%EC%BA%A1%EC%B2%98_12-11-2021_211214_localhost_z5ci8z.jpg"
              alt="img1"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkImageSlide;
