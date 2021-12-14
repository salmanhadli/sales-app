import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PeopleOutlineTwoToneIcon from "@mui/icons-material/PeopleOutlineTwoTone";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Customers.css";
import Search from "../Components/Search";
import BasicMenu from "../Components/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import TableRowsIcon from "@mui/icons-material/TableRows";
import RefreshIcon from "@mui/icons-material/Refresh";
import CreateIcon from "@mui/icons-material/Create";
import PieChartIcon from "@mui/icons-material/PieChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DataTable from "../Components/DataTable";
import { customerColumns } from "../Util/dataTableColumns";
import { customersDataUrl } from "../Util/URLs";

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

export default function Customers() {
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
        <BasicButtons buttons={buttonStack} />
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
      <div style={{ padding: "20px" }}>
        <DataTable
          rowsDataUrl={customersDataUrl}
          columns={customerColumns}
          setTotalRecords={() => {}}
        />
      </div>
    </div>
  );
}

export function BasicButtons({ buttons, variant }) {
  return (
    <Stack spacing={0} direction="row" className="buttonStack" sx={{ mr: 2 }}>
      {buttons.map((label, index) => (
        <Button variant={variant ?? "text"} key={label + " " + index} type="">
          {label}
        </Button>
      ))}
    </Stack>
  );
}
