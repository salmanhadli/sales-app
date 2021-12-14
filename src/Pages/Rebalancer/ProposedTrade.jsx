import * as React from "react";
import "./Rebalance.css";
import { Typography } from "@mui/material";
import TotalRecords from "../../Components/TotalRecords";
import DataTable from "../../Components/DataTable";

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

const existingTradeColumns = [
  { field: "account name", headerName: "ACCOUNT NAME", flex: 1 },
  { field: "model name", headerName: "MODEL NAME", flex: 1 },
  {
    field: "open/pending orders",
    headerName: "OPEN/PENDING ORDERS NAME",
    flex: 1,
  },
  { field: "action", headerName: "ACTION", flex: 1 },
];

const proposedTradeColumns = [
  {
    field: "account",
    headerName: "ACCOUNT",
    width: 200,
  },
  {
    field: "order action",
    headerName: "ORDER ACTION",
    width: 200,
  },
  {
    field: "security",
    headerName: "SECURITY",
    width: 200,
  },
  {
    field: "price",
    headerName: "PRICE $",
    width: 200,
  },
  {
    field: "quantity",
    headerName: "QUANTITY",
    width: 200,
  },
  {
    field: "amount",
    headerName: "AMOUNT $",
    width: 200,
  },
  {
    field: "auto approve status",
    headerName: "AUTO APPROVE STATUS",
    width: 200,
  },
  {
    field: "account number",
    headerName: "ACCOUNT NUMBER",
    width: 200,
  },
  {
    field: "order type",
    headerName: "ORDER TYPE",
    width: 200,
  },
  {
    field: "security type",
    headerName: "SECURITY TYPE",
    width: 200,
  },
  {
    field: "order status",
    headerName: "ORDER STATUS",
    width: 200,
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 200,
  },
  {
    field: "created date",
    headerName: "CREATED DATE",
    width: 200,
  },
  {
    field: "edited date",
    headerName: "EDITED DATE",
    width: 200,
  },
  {
    field: "short term gain",
    headerName: "SHORT TERM GAIN $",
    width: 200,
  },
  {
    field: "long term gain",
    headerName: "LONG TERM GAIN $",
    width: 200,
  },
  {
    field: "total gain",
    headerName: "TOTAL GAIN $",
    width: 200,
  },
  {
    field: "action",
    headerName: "ACTION",
    width: 200,
  },
];
