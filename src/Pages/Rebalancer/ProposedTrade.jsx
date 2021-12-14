import * as React from "react";
import "./Rebalance.css";
import { Typography } from "@mui/material";
import TotalRecords from "../../Components/TotalRecords";
import DataTable from "../../Components/DataTable";
import {
  existingTradeColumns,
  proposedTradeColumns,
} from "../../Util/dataTableColumns";

export default function ProposedTrade() {
  const [totalRecords, setTotalRecords] = React.useState("0");
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: "18px", fontWeight: "600", margin: "0 20px 0 20px" }}
        >
          Existing Trades
        </Typography>

        <TotalRecords margin={"10px"} value={totalRecords} />

        <DataTable
          rowsDataUrl={""}
          columns={existingTradeColumns}
          setTotalRecords={setTotalRecords}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontSize: "18px", fontWeight: "600", margin: "0 20px 0 20px" }}
        >
          Proposed Trades
        </Typography>

        <TotalRecords margin={"10px"} value={totalRecords} />

        <DataTable
          rowsDataUrl={""}
          columns={proposedTradeColumns}
          setTotalRecords={setTotalRecords}
        />
      </div>
    </div>
  );
}
