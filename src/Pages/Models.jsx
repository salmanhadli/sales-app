import * as React from "react";
import DataTable from "../Components/DataTable";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Menu from "../Components/Menu";
import Search from "../Components/Search";
import TotalRecords from "../Components/TotalRecords";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./Models.css";
import { CSSTransition } from "react-transition-group";

const modelDataUrl =
  "https://run.mocky.io/v3/666c1f2e-a4f9-43b9-b1a1-b1d643e766c1";

const modelDataColumns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "active", headerName: "Active", flex: 1 },
  {
    field: "noa",
    headerName: "Number of Accounts",
    flex: 1,
  },
];

export default () => {
  const [value, setValue] = React.useState(0);
  const [prevValue, setPrevValue] = React.useState(-1);
  const handleChange = (event, newValue) => {
    setPrevValue(value);
    setValue(newValue);
  };
  return (
    <ModelContainer
      value={value}
      handleChange={handleChange}
      prevValue={prevValue}
    />
  );
};

const ModelContainer = ({ value, handleChange, prevValue }) => {
  const [totalRecords, setTotalRecords] = React.useState(0);
  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Models" {...a11yProps(0)} />
          <Tab label="Categories" {...a11yProps(1)} />
          <Tab label="Sectors" {...a11yProps(2)} />
          <div style={{ flex: "1" }}></div>
          <Menu
            options={["New Modal", "Export All"]}
            label={<RemoveRedEyeIcon />}
          />
        </Tabs>
      </Box>
      <Search gutter={true} alignRight={true} />
      <TotalRecords margin="0 0 0 20px" value={totalRecords} />

      <TabPanel prevValue={prevValue} value={value} index={0}>
        <DataTable
          rowsDataUrl={modelDataUrl}
          columns={modelDataColumns}
          setTotalRecords={setTotalRecords}
        />
      </TabPanel>

      <TabPanel prevValue={prevValue} value={value} index={1}>
        <DataTable
          rowsDataUrl={modelDataUrl}
          columns={modelDataColumns}
          setTotalRecords={setTotalRecords}
        />
      </TabPanel>

      <TabPanel prevValue={prevValue} value={value} index={2}>
        <DataTable
          rowsDataUrl={modelDataUrl}
          columns={modelDataColumns}
          setTotalRecords={setTotalRecords}
        />
      </TabPanel>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, prevValue, ...other } = props;

  return (
    <CSSTransition
      in={value === index}
      timeout={800}
      // classNames="tab"
      classNames={{
        // enter: "tab-enter",
        enter: `${prevValue > index ? "tab-enter-reverse" : "tab-enter"}`,
        enterActive: "tab-enter-active",
        exit: "tab-exit",
        // exitActive: "tab-exit-active",
        exitActive: `${
          value > index ? "tab-exit-active" : "tab-exit-active-reverse"
        }`,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        role="tabpanel"
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box sx={{ p: 2 }}>{children}</Box>
      </div>
    </CSSTransition>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
