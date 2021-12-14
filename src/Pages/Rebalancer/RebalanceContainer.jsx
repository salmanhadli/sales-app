import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Rebalance from "./Rebalance";
import SpendCash from "./SpendCash";
import RaiseCash from "./RaiseCash";
import Analyzer from "./Analyzer";

export default function RebalanceContainer() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Rebalance" {...a11yProps(0)} />
          <Tab label="Spend Cash" {...a11yProps(1)} />
          <Tab label="Raise Cash" {...a11yProps(2)} />
          <Tab label="Analyzer" {...a11yProps(3)} />
          <Tab label="Proposed Table" {...a11yProps(4)} />
          <div style={{ flex: "1" }}></div>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Rebalance />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SpendCash />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RaiseCash />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Analyzer />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Proposed Table
      </TabPanel>
    </Box>
  );
}

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
      {value === index && <Box sx={{ p: 2, pt: 0 }}>{children}</Box>}
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