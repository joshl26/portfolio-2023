import React from "react";

const LandingPage = ({ chooseExperienceChangeHandler }) => {
  return (
    <button onClick={() => chooseExperienceChangeHandler()}>Continue...</button>
  );
};

export default LandingPage;
