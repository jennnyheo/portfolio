import { useState } from "react";
import React from "react";
import emailjs from "emailjs-com";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { GrGithub, GrLinkedin } from "react-icons/gr";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0935jim",
        "template_795blbi",
        e.target,
        "user_8L5c4LFE9HWH4sCJlabRv"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    alert("Email send Sucessfully! Thank you!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: [-1000, 0] }}
      transition={{ delay: 0.3 }}
      excit={{ opacity: 0 }}
    >
      <div className="contactContainer">
        <Nav />
        <motion.div
          className="worksContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          excit={{ opacity: 0 }}
        >
          <div className="workContainer">
            <div className="worksHeaderContainer">
              <span>Contact</span>
              <div className="contactLinks">
                <a href="/">
                  <GrLinkedin />
                  LinkedIn
                </a>
                <a href="/">
                  <GrGithub />
                  Github
                </a>
              </div>
            </div>
            <div className="works">
              <form onSubmit={handleSubmit} className="contactForm">
                <div className="formContents">
                  <div className="inputContainer">
                    <h2>NAME</h2>
                    <input
                      className="input1"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <h2>YOUR EMAIL</h2>
                    <input
                      className="input2"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <h2>MESSAGE</h2>
                    <textarea
                      className="messageArea"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <input className="submitBtn" type="submit" value="SEND" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
