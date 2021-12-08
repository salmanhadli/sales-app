import {
  FormGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { useState } from "react";

export default (props) => {
  const [gender, setGender] = useState("Account");
  const genderChangeHandler = (e, value) => {
    setGender(value);
    console.log(value);
  };

  return (
    <FormGroup>
      <FormControl component="fieldset" align="left">
        <RadioGroup
          row
          aria-label="gender"
          name="gender"
          value={gender ?? ""}
          onChange={genderChangeHandler}
          color={props.color}
        >
          <FormControlLabel
            value="Account"
            control={<Radio />}
            label="Account"
          />
          <FormControlLabel value="Model" control={<Radio />} label="Model" />
        </RadioGroup>
      </FormControl>
    </FormGroup>
  );
};
