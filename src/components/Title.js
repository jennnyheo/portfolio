import { motion } from "framer-motion";
import React from "react";
import "./../App.css";
import SubTitle from "./SubTitle";

const Title = () => {
  return (
    <div className="titleContainer">
      <div className="titles">
        <motion.div
          animate={{
            rotate: [0, 120, 0],
          }}
        >
          <span>P</span>
        </motion.div>
        <motion.div animate={{ y: [20, 40, 0] }}>
          <span>O</span>
        </motion.div>
        <motion.div animate={{ y: [-20, -40, 0] }}>
          <span>R</span>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <span>T</span>
        </motion.div>
        <motion.div animate={{ y: [-20, -140, 0] }} initial={{ y: 0 }}>
          <span>P</span>
        </motion.div>
        <motion.div animate={{ y: [-40, -60, 0] }}>
          <span>O</span>
        </motion.div>
        <span>L</span>
        <motion.div animate={{ y: [20, 40, 0] }} initial={{ y: 0 }}>
          <span>I</span>
        </motion.div>
        <motion.div animate={{ x: [20, 140, 0] }} initial={{ x: 0 }}>
          <span>O</span>
        </motion.div>
      </div>
      <SubTitle />
    </div>
  );
};

export default Title;
