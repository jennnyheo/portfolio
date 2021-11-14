import React from "react";
import { Link } from "react-router-dom";
import { IoIosLink, IoLogoGithub, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import "./../App.css";
import WorkImageSlide from "./WorkImageSlide";

const RrWork = ({ setShowRrWork }) => {
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
                  <h2>E-commerce</h2>
                </motion.div>
              </section>

              <section className="rnDescriSection">
                <div>
                  <motion.div
                    animate={{ y: [20, -10], opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span>React & Redux, MongoDB</span>
                    <p className="bottom-margin">Personal Project</p>
                    <span>
                      E-commerce website <br /> 간단한 쇼핑몰 사이트
                    </span>
                    <br />
                    <span className="bottom-margin">
                      제작기간: 2021.05 - 2021.11
                    </span>
                    <span>
                      React로 개발하였으며 상태관리를 위해 redux를
                      적용하였습니다. 로그인 및 회원가입시에는 bcrypt를 사용하여
                      암호화하였습니다.
                    </span>
                    <span>
                      사용자를 물품을 확인하고 상품의 상세페이지에서 수량을
                      적용하여 장바구니에 추가할 수 있습니다.
                      <br />
                      <br /> 데이터베이스는 MongoDB를 사용하였고 back-end는
                      Node.js 를 사용하였습니다.
                    </span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [20, -10], opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="links">
                      <div>
                        <a href="/https://github.com/jennnyheo/e-commerce-app/tree/master">
                          <IoLogoGithub />
                          <span>github</span>
                        </a>
                      </div>
                      <div>
                        <a href="/https://github.com/jennnyheo/e-commerce-app/tree/master">
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
                animate={{ y: [80, 20], opacity: 1 }}
                initial={{ y: 0, opacity: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="imgJsWorkContainer">
                  <img
                    className="jsWorkPhotoMain"
                    src="https://res.cloudinary.com/jenniecloud/image/upload/v1636815551/web_mockup_V1-front_hgvyrx.png"
                    alt="rmphotos"
                  />
                </div>
              </motion.div>
            </div>
            <div className="closeBtn" onClick={() => setShowRrWork(false)}>
              <IoMdClose />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RrWork;
