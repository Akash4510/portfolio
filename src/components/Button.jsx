import React from "react";

const BUTTON_STYLES = ["btn--solid", "btn--outline", "btn--link"];
const BUTTON_SIZES = ["btn--medium", "btn--large"];

const Button = ({
  btnClassName,
  icon,
  text,
  type,
  onClick,
  disabled,
  buttonStyle,
  buttonSize,
  iconPosition,
}) => {
  const btnStyle = BUTTON_STYLES.includes(buttonStyle)
    ? buttonStyle
    : BUTTON_STYLES[0];

  const btnSize = BUTTON_SIZES.includes(buttonSize)
    ? buttonSize
    : BUTTON_SIZES[0];
  const iconPos = iconPosition === "right" ? "right" : "left";

  return (
    <button
      className={`btn ${btnStyle} ${btnSize} ${btnClassName || ""}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPos === "left" && <span className="btn-icon">{icon}</span>}
      {text && <p className="btn-text">{text}</p>}
      {icon && iconPos === "right" && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
