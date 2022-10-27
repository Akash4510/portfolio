import React from "react";

import { Button } from "../../components";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section__container about__container">
        <h1 className="section__title">About Me</h1>
        <div className="about__text">
          <p>
            I am Akash Gupta, a Full Stack Web Developer and a Creative UI-UX
            Designer from Kolkata. I am currently pursuing my B.Tech in
            Electronics and Instrumentation Engineering from Techno Main
            Saltlake, West Bengal, Kolkata. I am a self-taught web developer and
            I am looking for opportunities to work with other developers to
            learn and grow together.
          </p>
          <p>
            I am a quick & enthusiastic learner and loves to work as a team. I
            am always ready to learn and work across technologies and domains. I
            love to explore new technologies and leverage them to solve
            real-life problems.
          </p>
          <p>
            Have an idea for a project? Let's talk about it. I am always open to
            a new challenge and I would love to use my skills to help your
            business grow. I am available for freelance work. Feel free to{" "}
            <span>
              <a href="#contact">contact me</a>
            </span>
            .
          </p>
        </div>
        <Button
          btnClassName="about__btn"
          buttonStyle="btn--solid"
          text="Download Resume"
          iconPosition="right"
        />
      </div>
    </section>
  );
};

export default About;
