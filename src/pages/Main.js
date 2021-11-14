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
                <span>to be a full-stack developer </span>
              </Marquee>
            </motion.div>
          </div>
          <Lines />
        </div>
        <section className="brefWorkContainer">
          <div>
            <span>JAVA · Spring project</span>
            <div className="displayNone">
              <p>JSP & JAVA Spring을 이용한 숙소예약, 호스팅 사이트</p>
              <a href="/work">See more</a>
            </div>
          </div>
          <div>
            <span>React project</span>
            <div className="displayNone">
              <p>React을 이용한 E-commerce</p>
              <a href="/work">See more</a>
            </div>
          </div>
          <div>
            <span>Next · React Spring project</span>
            <div className="displayNone">
              <p>React & Next을 활용한 개발자 취업플랫폼</p>
              .brefWorkContainer div .displayNone
            </div>
          </div>
        </section>
        <div className="seeMoreMobile">
          <a href="/work">See projects</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
