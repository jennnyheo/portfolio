import React from "react";
import { Link } from "react-router-dom";
import { IoIosLink, IoLogoGithub, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import "./../App.css";
import WorkImageSlide from "./WorkImageSlide";

const RnWork = ({ setShowRnWork }) => {
  console.log();
  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={{ y: [100, -30], opacity: 1 }}
          initial={{ y: 0, opacity: 0 }}
          className="rnWorkTotalContainer"
        >
          <div className="rnWorkContainer">
            <div className="rnWorkDescriContainer">
              <section className="rnDescriHeSection">
                <motion.div
                  animate={{ y: [20, -10], opacity: 1 }}
                  initial={{ y: 0, opacity: 0 }}
                >
                  <h2>HIGHER</h2>
                </motion.div>
              </section>
              <section className="rnDescriSection">
                <div>
                  <motion.div
                    animate={{ y: [20, -10], opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span>React & Next</span>
                    <p>Personal Project · Community for developers</p>
                    <span>Wanted clone 프로젝트</span>
                    <br />
                    <span>제작기간: 2021.10 - 2021.11</span>
                    <span>
                      React 와 Next.js 를 활용하여 "wanted" 사이트 클론
                      프로젝트를 진행했습니다.{" "}
                    </span>
                    <span>
                      이 프로젝트는 wanted 사이트를 참고하여 제작하였습니다.
                      개발자를 위한 강연, 아티클을 볼 수있고, 일자리 정보를
                      확인할 수 있도록 제작하였습니다. <br />
                      <br /> 데이터베이스는 mongoDB를 사용했습니다. mongoDB의
                      데이터를 api 페이지로 받아오고 그 데이터를 fetch 하여
                      화면에 출력하였습니다. 로그인은 brcrpt를 활용하여
                      암호화하여 데이터베이스에 저장하였습니다.
                    </span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [20, -10], opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="links">
                      <div>
                        <a href="/https://github.com/jennnyheo/higher">
                          <IoLogoGithub />
                          <span>github</span>
                        </a>
                      </div>
                      <div>
                        <a href="/https://github.com/jennnyheo/higher">
                          <IoIosLink />
                          <span>file</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
            <div>
              <motion.div
                animate={{ y: [20, -10], opacity: 1 }}
                initial={{ y: 0, opacity: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="rnImgContainer">
                  <img
                    src="https://res.cloudinary.com/jenniecloud/image/upload/v1636775063/3_nwqoee.png"
                    alt="rmphotos"
                  />
                </div>
              </motion.div>
            </div>
            {/* <WorkImageSlide /> */}
            <div className="closeBtn" onClick={() => setShowRnWork(false)}>
              <IoMdClose />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RnWork;
