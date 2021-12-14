import * as React from "react";
import Loading from "../Components/Loading";
import DataTable from "../Components/DataTable";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Menu from "../Components/Menu";
import Search from "../Components/Search";
import TotalRecords from "../Components/TotalRecords";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return <ModelContainer value={value} handleChange={handleChange} />;
};

const ModelContainer = ({ value, handleChange }) => {
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
      <TabPanel value={value} index={0}>
        <DataTable
          rowsDataUrl={modelDataUrl}
          columns={modelDataColumns}
          setTotalRecords={setTotalRecords}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataTable
          rowsDataUrl={modelDataUrl}
          columns={modelDataColumns}
          setTotalRecords={setTotalRecords}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
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
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
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
