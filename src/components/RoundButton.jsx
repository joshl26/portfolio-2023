import React from "react";

const RoundButton = ({ buttonText, href, buttonClass }) => {
  return (
    <a href={href}>
      <button className={buttonClass}>{buttonText}</button>
    </a>
  );
};

export default RoundButton;
