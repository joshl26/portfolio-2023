import React from "react";

const RoundButton = ({ buttonText, href, buttonClass, target, rel }) => {
  return (
    <a rel={"noreferrer"} target={"_blank"} href={href}>
      <button className={buttonClass}>{buttonText}</button>
    </a>
  );
};

export default RoundButton;
