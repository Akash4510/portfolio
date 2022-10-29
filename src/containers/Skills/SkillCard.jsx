import React from "react";

const SkillCard = ({ img, title, desc }) => {
  return (
    <div className="skill-card">
      <div className="skill-card__img">
        <img src={img} alt="img" />
      </div>
      <div className="skill-card__text">
        <span className="skill-card__title">{title}</span>
        <p className="skill-card__desc">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
