import React from "react";

const RoundButton = ({
  buttonText,
  href,
  buttonClass,
  target = "_blank",
  rel = "noreferrer",
}) => {
  return (
    <a rel={rel} target={target} href={href}>
      <button className={buttonClass}>{buttonText}</button>
    </a>
  );
};

export default RoundButton;
