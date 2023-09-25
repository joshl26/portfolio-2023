import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const TopicRadio = ({ colorMode, onTopicChanged }) => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Comment", value: "1" },
    { name: "Recruiter", value: "2" },
    { name: "Work Request", value: "3" },
    { name: "Other", value: "4" },
  ];

  const onButton

  return (
    <ButtonGroup data-bs-theme="dark">
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={`outline-${colorMode}`}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default TopicRadio;
