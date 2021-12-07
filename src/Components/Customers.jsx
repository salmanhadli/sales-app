// import React from 'react'

// function Customers() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Customers

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PeopleOutlineTwoToneIcon from "@mui/icons-material/PeopleOutlineTwoTone";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Customers.css";
import Search from "./Search";
import BasicMenu from "./Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import TableRowsIcon from "@mui/icons-material/TableRows";

const customersType = [
  "All Customers",
  "Birthdays this month",
  "New this week",
  "Recently viewed (Pinned)",
  "Recently viewed customers",
];

const LIST_VIEW_CONTROLS = [
  "New",
  "Clone",
  "Rename",
  "Sharing Settings",
  "Show List Filters",
  "Select Fields to Display",
  "Delete",
  "Reset Column Width",
];

const buttonStack = ["New", "Import", "Send List Email", "Printable View"];

export default function SelectLabels() {
  const [type, setType] = React.useState(
    customersType.indexOf("Recently viewed (Pinned)")
  );
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", margin: "10px" }}>
          <PeopleOutlineTwoToneIcon
            style={{ fontSize: "50px", marginTop: "0px" }}
          />
          <div>
            <FormControl sx={{ m: 1, mt: 1 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Customers
              </InputLabel>
              <Select
                value={type}
                onChange={handleChange}
                inputProps={{ "aria-label": "Without label" }}
                label="Customers"
                autoWidth
                sx={{ height: "40px" }}
              >
                {customersType.map((field) => (
                  <MenuItem
                    value={customersType.indexOf(field)}
                    key={customersType.indexOf(field)}
                  >
                    {field}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <BasicButtons />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: "20px" }}>20 items • Updated an hour ago</p>
        <div style={{ flex: "1" }} />
        <Search gutter={false} />
        <BasicMenu
          label={<SettingsIcon />}
          options={LIST_VIEW_CONTROLS}
          title="List View Controls"
        />
        <BasicMenu
          label={<TableRowsIcon />}
          options={LIST_VIEW_CONTROLS}
          title="Display As"
          iconMenu={true}
        />
      </div>
    </div>
  );
}

function BasicButtons() {
  return (
    <Stack spacing={0} direction="row" className="buttonStack" sx={{ mr: 2 }}>
      {buttonStack.map((label, index) => (
        <Button variant="text" key={label + " " + index}>
          {label}
        </Button>
      ))}
    </Stack>
  );
}
