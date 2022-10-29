import React from "react";
import images from "../../constants/images";

import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    {
      title: "HTML 5",
      img: images.html,
      desc: "A standard markup language for creating Web pages.",
    },
    {
      title: "CSS 3",
      img: images.css,
      desc: "A style sheet language used for describing the presentation of a document written in a markup language.",
    },
    {
      title: "JavaScript",
      img: images.js,
      desc: "A programming language that conforms to the ECMAScript specification.",
    },
    {
      title: "Python",
      img: images.python,
      desc: "An interpreted, high-level, general-purpose programming language.",
    },
    {
      title: "Sass",
      img: images.sass,
      desc: "A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
    },
    {
      title: "Bootstrap",
      img: images.bootstrap,
      desc: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    },
    {
      title: "React",
      img: images.react,
      desc: "A JavaScript library for building user interfaces.",
    },
  ];

  return (
    <section className="section skills" id="skills">
      <div className="section__container skills__container">
        <h1 className="section__title">Skills</h1>
        <div className="skills__cards-container">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              img={skill.img}
              title={skill.title}
              desc={skill.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
