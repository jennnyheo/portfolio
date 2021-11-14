import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useRef } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./../App.css";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Main from "../pages/Main";

const SubTitle = () => {
  const workPage = useRef();
  const main = useRef();
  const gotoMain = (e) => {
    e.preventDefault();
    window.scrollTo({ behavior: "smooth", top: main.current.offsetTop });
  };
  return (
    <div className="titleContainer">
      <motion.div
        transition={{ delay: 1 }}
        animate={{ y: [20, -40], opacity: 1 }}
        initial={{ opacity: 0 }}
        className="titleDescri"
      >
        <div>
          <span>WEB DEVELOPER , HEEJU HEO</span>
        </div>
      </motion.div>
      <motion.div
        transition={{ delay: 1.5 }}
        animate={{ y: [-200, -250, -230, -240], opacity: 1 }}
        initial={{ opacity: 0, y: -40 }}
        className="titleDescri-sub"
      >
        <div>
          <span>
            <a href="/main">MAIN</a>
          </span>

          <span>
            <a href="/about">ABOUT</a>
          </span>

          <span>
            <a href="/work">WORK</a>
          </span>

          <span>
            <a href="/contact">CONTACT</a>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SubTitle;
