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
          {/* <FormControlLabel
            value="Account"
            control={<Radio />}
            label="Account"
          />
          <FormControlLabel value="Model" control={<Radio />} label="Model" /> */}
          {options.map((option, index) => (
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </FormGroup>
  );
};
