import * as React from "react";
import RadioInputs from "./RadioInputs";
import Search from "./Search";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SelectInputs from "./SelectInputs";
import "./Rebalance.css";
import { Typography } from "@mui/material";
import TotalRecords from "./TotalRecords";
import DataTable from "./DataTable";
import BusinessIcon from "@mui/icons-material/Business";

const RebalanceOptions = ["Account", "Model"];

export default function Rebalance() {
  const [option, setOption] = React.useState(RebalanceOptions[0]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <RadioInputs options={RebalanceOptions} setOption={setOption} />
        <Search iconLabel={<BusinessIcon />} />
        <div style={{ flex: "1 0 10%" }}></div>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Trade Notes"
          style={{
            width: 300,
            height: 70,
            fontSize: "20px",
            margin: "10px 0",
          }}
        />
      </div>
      <div style={{ display: "flex" }} className="selectStack">
        <SelectInputs
          label="Type"
          options={[
            "Rebalance",
            "Rebalance Overweight",
            "Rebalance Underweight",
          ]}
        />
        <SelectInputs
          label="Level"
          options={["Security", "Sector", "Category"]}
        />
      </div>
      {option === "Account" && <RebalanceAccount />}
      {option === "Model" && <RebalanceModel />}
    </div>
  );
}

const RebalanceAccountColumns = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "model",
    headerName: "Model",
    width: 200,
  },
  {
    field: "cash",
    headerName: "Cash $",
    width: 180,
  },
  {
    field: "total current cash",
    headerName: "Total Current Cash $",
    width: 200,
  },
  {
    field: "total available cash",
    headerName: "Total Available Cash $",
    width: 200,
  },
  {
    field: "last rebalanced on",
    headerName: "Last Rebalanced On",
    width: 200,
  },
];

const RebalanceAccount = () => {
  const [totalRecords, setTotalRecords] = React.useState("0");
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: "18px", fontWeight: "600", margin: "0 20px 0 20px" }}
        >
          Account
        </Typography>
        <div style={{ flex: "1 0 30%" }}></div>
        <Search />
      </div>
      <TotalRecords margin={"10px"} value={totalRecords} />
      <DataTable
        rowsDataUrl={""}
        columns={RebalanceAccountColumns}
        setTotalRecords={setTotalRecords}
      />
    </>
  );
};

const RebalanceModelColumns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "active",
    headerName: "Active",
    flex: 1,
  },
  {
    field: "count Accounts",
    headerName: "Count Accounts",
    flex: 1,
  },
];

const RebalanceModel = () => {
  const [totalRecords, setTotalRecords] = React.useState("0");
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: "18px", fontWeight: "600", margin: "0 20px 0 20px" }}
        >
          Account
        </Typography>
        <div style={{ flex: "1 0 30%" }}></div>
        <Search />
      </div>
      <TotalRecords margin={"10px"} value={totalRecords} />
      <DataTable
        rowsDataUrl={""}
        columns={RebalanceModelColumns}
        setTotalRecords={setTotalRecords}
      />
    </>
  );
};
