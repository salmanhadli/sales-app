import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Rebalance from "./Rebalance";
import SpendCash from "./SpendCash";
import RaiseCash from "./RaiseCash";
import Analyzer from "./Analyzer";
import ProposedTrade from "./ProposedTrade";
import { CSSTransition } from "react-transition-group";

export default function RebalanceContainer() {
  const [value, setValue] = React.useState(0);
  const [prevValue, setPrevValue] = React.useState(-1);
  const handleChange = (event, newValue) => {
    setPrevValue(value);
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
          <Tab label="Proposed Trade" {...a11yProps(4)} />
          <div style={{ flex: "1" }}></div>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} prevValue={prevValue}>
        <Rebalance />
      </TabPanel>
      <TabPanel value={value} index={1} prevValue={prevValue}>
        <SpendCash />
      </TabPanel>
      <TabPanel value={value} index={2} prevValue={prevValue}>
        <RaiseCash />
      </TabPanel>
      <TabPanel value={value} index={3} prevValue={prevValue}>
        <Analyzer />
      </TabPanel>
      <TabPanel value={value} index={4} prevValue={prevValue}>
        <ProposedTrade />
      </TabPanel>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, prevValue, ...other } = props;

  return (
    <CSSTransition
      in={value === index}
      timeout={800}
      classNames={{
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
