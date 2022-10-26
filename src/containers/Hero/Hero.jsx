import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { Button } from "../../components";
import heroImg from "../../assets/img/hero-img.png";

const Hero = () => {
  const desc = [
    " Full Stack Web Developer",
    " Creative UI-UX Designer",
    "n Enthusiastic Programmer",
  ];

  return (
    <section className="section hero" id="hero">
      <div className="section__container hero__container">
        <div className="hero__text">
          <h3 className="hero__text-hello">
            Hello <span className="hero__text-icon">👋</span>,
          </h3>
          <h1 className="hero__text-name">
            I'm <span>Akash</span>
          </h1>
          <h2 className="hero__text-desc">
            A
            <span>
              <Typewriter
                words={desc}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </h2>
          <Button
            btnClassName="hero__btn"
            buttonStyle="btn--solid"
            text="Download Portfolio"
            iconPosition="right"
          />
        </div>

        <div className="hero__img">
          <motion.div
            animate={{ y: [30, 0, 30] }}
            transition={{ duration: 4, repeat: "Infinity" }}
          >
            <img src={heroImg} alt="profile-pic" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
