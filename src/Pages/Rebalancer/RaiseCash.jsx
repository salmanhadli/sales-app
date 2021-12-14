import * as React from "react";
import Search from "../../Components/Search";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "../../Components/Rebalance.css";
import { Typography } from "@mui/material";
import TotalRecords from "../../Components/TotalRecords";
import DataTable from "../../Components/DataTable";
import BusinessIcon from "@mui/icons-material/Business";

export default function RaiseCash() {
  const [totalRecords, setTotalRecords] = React.useState("0");
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
        <Search
          iconLabel={<BusinessIcon sx={{ color: "blue" }} />}
          textLabel="Select Account"
        />

        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Trade Notes"
          style={{
            width: 300,
            height: 70,
            fontSize: "20px",
            margin: "10px 0",
            marginLeft: "auto",
          }}
        />
      </div>

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

        <Search />
      </div>

      <TotalRecords margin={"10px"} value={totalRecords} />

      <DataTable
        rowsDataUrl={""}
        columns={raiseCashColumns}
        setTotalRecords={setTotalRecords}
        noCheckBox={true}
      />
    </div>
  );
}

const raiseCashColumns = [
  { field: "account name", headerName: "ACCOUNT NAME", flex: 0.8 },
  { field: "account number", headerName: "ACCOUNT NUMBER", flex: 1 },
  { field: "model", headerName: "MODEL", flex: 0.5 },
  { field: "total current cash", headerName: "TOTAL CURRENT CASH $", flex: 1 },
  {
    field: "total available cash",
    headerName: "TOTAL AVAILABLE CASH $",
    flex: 1,
  },
  { field: "current value", headerName: "CURRENT VALUE $", flex: 1 },
  { field: "amount to be raised", headerName: "AMOUNT TO BE RAISED", flex: 1 },
];
