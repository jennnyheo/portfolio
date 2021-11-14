import { motion } from "framer-motion";
import React from "react";
import "./../App.css";

const Lines = () => {
  return (
    <div className="svg">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100"
        height="100"
      >
        <motion.path
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        />
      </motion.svg>
    </div>
  );
};

export default Lines;
