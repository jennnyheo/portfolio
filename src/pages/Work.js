import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import JsWork from "../components/JsWork";
import Nav from "../components/Nav";
import RnWork from "../components/RnWork";
import RrWork from "../components/RrWork";
import Marquee from "react-fast-marquee";
import "./../App.css";

const Work = ({ workPage }) => {
  const [showRnWork, setShowRnWork] = useState(false);
  const [showJsWork, setShowJsWork] = useState(false);
  const [showRrWork, setShowRrWork] = useState(false);
  return (
    <motion.div
      className="worksContainer"
      ref={workPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: [-1000, 0] }}
      transition={{ delay: 0.7 }}
      excit={{ opacity: 0 }}
    >
      <Nav />

      <div className="workContainer">
        <div className="worksHeaderContainer">
          <span>PROJECTS</span>
          <p>Team project & personal projects</p>
        </div>
        <div className="works">
          <div className="work" onClick={() => setShowJsWork(true)}>
            <Marquee>
              <div className="workDescri">
                <span>
                  HOSTING WEBSITE · JAVA · SPRING · MYSQL ·JAVASCRIPT · MYBATIS
                  · JSP
                </span>
              </div>
            </Marquee>
            <div className="hoverTextContainer">
              <span className="projectHoverHeader">SPRING</span>
              <span>스프링 프로젝트</span>

              <span>Team project, used Spring and MYSQL</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="work" onClick={() => setShowRrWork(true)}>
            <Marquee>
              <div className="workDescri">
                <span>
                  E-COMMERCE WEBSITE · REACT.JS · NODE.JS · MONGODB ·REDUX{" "}
                </span>
              </div>
            </Marquee>
            <div className="hoverTextContainer">
              <span className="projectHoverHeader">REACT.JS</span>
              <span>리액트 프로젝트</span>
              <span>Personal project, used reat.js and node.js</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="work" onClick={() => setShowRnWork(true)}>
            <Marquee>
              <div className="workDescri">
                <span>
                  JOB-COMMUNITY WEBSITE · REACT.JS · NEXT.JS · MONGODB{" "}
                </span>
              </div>
            </Marquee>
            <div className="hoverTextContainer">
              <span className="projectHoverHeader">NEXT.JS</span>
              <span>리액트 · 넥스트 프로젝트</span>
              <span>Personal project, used reat.js, next.js and mongoDB</span>
            </div>
          </div>
          <div className="divider"></div>
          <a href="https://github.com/jennnyheo">
            <span className="moreProjects">More Projects >> </span>
          </a>
        </div>
      </div>
      <div>{showRnWork && <RnWork setShowRnWork={setShowRnWork} />}</div>
      <div>{showJsWork && <JsWork setShowJsWork={setShowJsWork} />}</div>
      <div>{showRrWork && <RrWork setShowRrWork={setShowRrWork} />}</div>
    </motion.div>
  );
};

export default Work;
