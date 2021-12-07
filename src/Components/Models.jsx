import * as React from "react";
import Loading from "./Loading";
import DataTable from "./DataTable";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "../Components/Menu";
import Search from "../Components/Search";
import TotalRecords from "../Components/TotalRecords";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Suspense fallback={<Loading />}>
      <ModelContainer value={value} handleChange={handleChange} />
    </React.Suspense>
  );
};

const ModelContainer = ({ value, handleChange }) => {
  return (
    <>
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
      <Search gutter={true} />
      <TotalRecords />
      <TabPanel value={value} index={0}>
        <DataTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataTable />
      </TabPanel>
    </>
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
