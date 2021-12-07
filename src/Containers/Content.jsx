import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "../Components/Menu";
import Search from "../Components/Search";
import TotalRecords from "../Components/TotalRecords";
import Models from "../Components/Models";

export default function Content({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Content">
      <Box
        sx={{
          width: "95%",
          margin: "20px auto",
          backgroundColor: "white",
          borderRadius: "8px",
          height: "85vh",
        }}
      >
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
            <Menu />
          </Tabs>
        </Box>
        <Search />
        <TotalRecords />
        <TabPanel value={value} index={0}>
          <Models />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Models />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Models />
        </TabPanel>
      </Box>
    </div>
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
