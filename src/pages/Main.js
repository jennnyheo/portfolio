import React from "react";
import Nav from "../components/Nav";
import { motion, AnimatePresence } from "framer-motion";
import "./../App.css";
import Marquee from "react-fast-marquee";
import Lines from "../components/Lines";
const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: [-1000, 0] }}
      transition={{ delay: 0.3 }}
      excit={{ opacity: 0 }}
    >
      <div className="mainContainer">
        <Nav />

        <div className="mySelfContainer">
          <div>
            <motion.div
              animate={{
                y: [0, -20],
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="helloSpan">HELLO,</span>
            </motion.div>
            <motion.div
              transition={{ delay: 1.5 }}
              animate={{
                y: [10, -40],
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
            >
              <span className="iamSpan">I AM A</span>
            </motion.div>
            <br />
            <motion.div
              transition={{ delay: 1.9 }}
              animate={{
                y: [20, -60],
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
            >
              <span>WEB DEVELOPER</span>
            </motion.div>
          </div>

          <div className="spiningBanner">
            <motion.div
              transition={{ delay: 2.2 }}
              animate={{
                y: [30, 0],
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
            >
              <Marquee>
                <span>front-end developer </span>
              </Marquee>
              <Marquee direction="right">
                <span>passionative developer </span>
              </Marquee>
              <Marquee>
                <span>full-stack developer </span>
              </Marquee>
            </motion.div>
          </div>
          <Lines />
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
