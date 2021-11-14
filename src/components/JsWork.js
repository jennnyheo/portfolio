import React from "react";
import { Link } from "react-router-dom";
import { IoIosLink, IoLogoGithub, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import "./../App.css";
import WorkImageSlide from "./WorkImageSlide";

const JsWork = ({ setShowJsWork }) => {
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
                  <h2>쉬어家</h2>
                </motion.div>
              </section>

              <section className="rnDescriSection">
                <div>
                  <motion.div
                    animate={{ y: [20, -10], opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span>Spring & JSP · MYSQL</span>
                    <p className="bottom-margin">Team project</p>
                    <span>
                      Hosting and Booking Website <br /> 숙소 호스팅 및
                      예약사이트
                    </span>
                    <br />
                    <span className="bottom-margin">
                      제작기간: 2021.09 - 2021.10
                    </span>
                    <span>JAVA Spring, JSP를 활용한 프로젝트입니다.</span>
                    <span>
                      이 프로젝트는 사용자가 숙소를 예약하거나 자신의 공간을
                      호스팅 하여 수익을 창출할 수 도 있습니다. <br />
                      <br />
                      사용자는 본인의 과거예약 및 현재 예약사항을 확인할 수 있고
                      호스트와 연락을 할 수 있도록 이메일 API를 사용했습니다.
                      <br />
                      <br /> 데이터베이스는 AWS EC2와 RDS MYSQL을 사용했습니다.
                      Mybatis를 사용하여 query를 작성하였고 이를 Controller와
                      연결하여 데이터를 화면에 출력하였습니다
                    </span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [20, -10], opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="links">
                      <div>
                        <a href="https://github.com/jennnyheo/sheerhouse">
                          <IoLogoGithub />
                          <span>github</span>
                        </a>
                      </div>
                      <div>
                        <a href="https://drive.google.com/file/d/1jWufIiIETE0WJgnMlJLaTvZTDNfScc6x/view">
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
                <div className="imgJsWorkContainer">
                  <img
                    className="jsWorkPhotoMain"
                    src="https://res.cloudinary.com/jenniecloud/image/upload/v1636775589/revise_w9cecv.png"
                    alt="rmphotos"
                  />
                </div>
              </motion.div>
            </div>
            <div className="closeBtn" onClick={() => setShowJsWork(false)}>
              <IoMdClose />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default JsWork;
