import { useState } from "react";
import { ButtonGroup, Col, Stack, ToggleButton } from "react-bootstrap";
import "./TopicRadio.css";

const TopicRadio = ({ colorMode, onTopicChanged, disabled }) => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Comment", value: "1" },
    { name: "Recruiter", value: "2" },
    { name: "Work Request", value: "3" },
    { name: "Other", value: "4" },
  ];

  const onButtonChange = (e) => {
    setRadioValue(e.target.value);
    // console.log(e.target.name);
    onTopicChanged(e);
  };

  return (
    <ButtonGroup data-bs-theme="dark">
      <Stack gap={2}>
        {radios.map((radio, idx) => (
          <ToggleButton
            className="topic-button"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={`outline-${colorMode}`}
            name={radio.name}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => onButtonChange(e)}
            onClick={(e) => onTopicChanged(e)}
            disabled={disabled}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </Stack>
    </ButtonGroup>
  );
};

export default TopicRadio;
