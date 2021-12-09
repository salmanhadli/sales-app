import {
  FormGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { useState } from "react";

export default ({ options, setOption }) => {
  const [choice, setChoice] = useState(options[0]);
  const choiceSelectHandler = (e, value) => {
    setChoice(value);
    setOption(value);
  };

  return (
    <FormGroup>
      <FormControl component="fieldset" align="left">
        <RadioGroup
          row
          aria-label="choice"
          name="choice"
          value={choice ?? ""}
          onChange={choiceSelectHandler}
        >
          {options.map((option, index) => (
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
              key={option + " " + index}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </FormGroup>
  );
};
