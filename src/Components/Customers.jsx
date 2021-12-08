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
import RefreshIcon from "@mui/icons-material/Refresh";
import CreateIcon from "@mui/icons-material/Create";
import PieChartIcon from "@mui/icons-material/PieChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DataTable from "./DataTable";
import axios from "axios";

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

const customersDataUrl =
  "https://run.mocky.io/v3/a0cb7edf-2589-4dce-a72e-1e4aa92e956f";

const customerColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "Name",
    headerName: "Name",
    width: 400,
  },
  {
    field: "Phone",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "Email",
    headerName: "Email",
    width: 400,
  },
];

export default function SelectLabels() {
  let customersData;
  const [type, setType] = React.useState(
    customersType.indexOf("Recently viewed (Pinned)")
  );

  const [data, setData] = React.useState([]);

  const getCustomerData = async () => {
    await axios.get(customersDataUrl).then((res) => {
      console.log(res.data);
      setData(res.data);
      return data;
    });
  };

  // const getCustomerData = () => {
  //   return [
  //     {
  //       id: 1,
  //       Name: "Sal Man",
  //       Phone: "",
  //       Email: "salman@nomail.com",
  //     },
  //     {
  //       id: 2,
  //       Name: "Joss Whedon",
  //       Phone: "",
  //       Email: "josswhedon@nomail.com",
  //     },
  //     {
  //       id: 3,
  //       Name: "Henry Cavill",
  //       Phone: "",
  //       Email: "henrycavill@nomail.com",
  //     },
  //     {
  //       id: 4,
  //       Name: "Ben Affleck",
  //       Phone: "",
  //       Email: "benaffleck@nomail.com",
  //     },
  //     {
  //       id: 5,
  //       Name: "Gal Gadot",
  //       Phone: "",
  //       Email: "galgadot@nomail.com",
  //     },
  //     {
  //       id: 6,
  //       Name: "Ezra Miller",
  //       Phone: "",
  //       Email: "ezramiller@nomail.com",
  //     },
  //     {
  //       id: 7,
  //       Name: "Grant Gustin",
  //       Phone: "",
  //       Email: "grantgustin@nomail.com",
  //     },
  //     {
  //       id: 8,
  //       Name: "Jason Mamoa",
  //       Phone: "",
  //       Email: "jasonmamoa@nomail.com",
  //     },
  //     {
  //       id: 9,
  //       Name: "Zack Snyder",
  //       Phone: "",
  //       Email: "zacksnyder@nomail.com",
  //     },
  //     {
  //       id: 10,
  //       Name: "Louis Lane",
  //       Phone: "",
  //       Email: "louislane@nomail.com",
  //     },
  //     {
  //       id: 11,
  //       Name: "Clark Kent",
  //       Phone: "",
  //       Email: "clarkkent@nomail.com",
  //     },
  //     {
  //       id: 12,
  //       Name: "Bruce Wayne",
  //       Phone: "",
  //       Email: "brucewayne@nomail.com",
  //     },
  //     {
  //       id: 13,
  //       Name: "Barry Allen",
  //       Phone: "",
  //       Email: "barryallen@nomail.com",
  //     },
  //   ];
  // };

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
        <Button
          id="basic-button"
          // onClick={handleClick}
          style={{
            height: "100%",
          }}
          title="refresh"
        >
          <RefreshIcon />
        </Button>

        <Button
          id="basic-button"
          // onClick={handleClick}
          style={{
            height: "100%",
          }}
          title="refresh"
        >
          <CreateIcon />
        </Button>
        <Stack spacing={0} direction="row" className="iconStack" sx={{ mr: 2 }}>
          <Button variant="text" disabled>
            <PieChartIcon />
          </Button>
          <Button variant="text" disabled>
            <FilterAltIcon />
          </Button>
        </Stack>
      </div>
      <div style={{ padding: "24px" }}>
        <DataTable rowsDataUrl={customersDataUrl} columns={customerColumns} />
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
