import React from "react";
import { Container } from "react-bootstrap";

const LandingPage = ({ chooseExperienceChangeHandler }) => {
  return (
    <Container>
      <div>
        <button onClick={() => chooseExperienceChangeHandler()}>
          Continue...
        </button>
      </div>
    </Container>
  );
};

export default LandingPage;
