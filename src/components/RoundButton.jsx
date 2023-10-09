import React from "react";

const RoundButton = ({ buttonText, href, buttonClass, clickHandler }) => {
  return (
    <button onClick={() => clickHandler()} className={buttonClass} href={href}>
      {buttonText}
    </button>
  );
};

export default RoundButton;
