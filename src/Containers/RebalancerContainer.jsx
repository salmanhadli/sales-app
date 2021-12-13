import * as React from "react";
import RadioInputs from "../Components/RadioInputs";
import Search from "../Components/Search";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SelectInputs from "../Components/SelectInputs";
import "../Components/Rebalance.css";
import { Typography } from "@mui/material";
import TotalRecords from "../Components/TotalRecords";
import DataTable from "../Components/DataTable";
import BusinessIcon from "@mui/icons-material/Business";
import { BasicButtons } from "../Pages/Customers";

const RebalanceOptions = ["Account", "Model"];

export default function RebalancerContainer({ subTab }) {
  const [option, setOption] = React.useState(RebalanceOptions[0]);
  const [tab, setTab] = React.useState(subTab);
  const [totalRecords, setTotalRecords] = React.useState("0");
  return (
    <div>
      {tab === "Analyzer" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <BasicButtons buttons={["Analyze", "Proposed Trade"]} />
        </div>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {tab === "Rebalance" && (
          <RadioInputs options={RebalanceOptions} setOption={setOption} />
        )}

        <Search
          iconLabel={<BusinessIcon sx={{ color: "blue" }} />}
          textLabel={tab !== "Rebalance" && "Select Account"}
        />
        {tab === "Analyzer" ?? (
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
        )}
      </div>
      {tab === "Rebalance" && (
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
      )}

      {tab === "Analyzer" && (
        <div style={{ margin: "10px 22px", width: "240px" }}>
          <SelectInputs
            label="Level"
            options={["Security", "Sector", "Category"]}
          />
        </div>
      )}

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
          {tab === "Rebalance" ? option : "Account"}
        </Typography>

        {tab === "Analyzer" ?? <Search />}
      </div>

      <TotalRecords margin={"10px"} value={totalRecords} />

      {tab === "Rebalance" && option === "Account" && (
        <DataTable
          rowsDataUrl={""}
          columns={rebalanceAccountColumns}
          setTotalRecords={setTotalRecords}
          noCheckBox={true}
        />
      )}
      {tab === "Rebalance" && option === "Model" && (
        <DataTable
          rowsDataUrl={""}
          columns={rebalanceModelColumns}
          setTotalRecords={setTotalRecords}
          noCheckBox={true}
        />
      )}

      {tab === "Spend Cash" && (
        <DataTable
          rowsDataUrl={""}
          columns={spendCashColumns}
          setTotalRecords={setTotalRecords}
          noCheckBox={true}
        />
      )}

      {tab === "Raise Cash" && (
        <DataTable
          rowsDataUrl={""}
          columns={raiseCashColumns}
          setTotalRecords={setTotalRecords}
          noCheckBox={true}
        />
      )}

      {tab === "Analyzer" && (
        <>
          <DataTable
            rowsDataUrl={""}
            columns={analyzerAccountsColumns}
            setTotalRecords={setTotalRecords}
            noCheckBox={true}
          />
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              margin: "30px 20px 0 20px",
            }}
          >
            Securities
          </Typography>
          <DataTable
            rowsDataUrl={""}
            columns={analyzerSecuritiesColumns}
            setTotalRecords={setTotalRecords}
          />
        </>
      )}
    </div>
  );
}

const rebalanceAccountColumns = [
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

const rebalanceModelColumns = [
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

const spendCashColumns = [
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
  { field: "invested amount", headerName: "INVESTED AMOUNT $", flex: 1 },
  { field: "amount to be spent", headerName: "AMOUNT TO BE SPENT", flex: 1 },
];

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

const analyzerAccountsColumns = [
  {
    field: "account name",
    headerName: "ACCOUNT NAME",
    flex: 1,
  },
  {
    field: "account value",
    headerName: "ACCOUNT VALUE",
    flex: 1,
  },
  {
    field: "model name",
    headerName: "MODEL NAME",
    flex: 1,
  },
];

const analyzerSecuritiesColumns = [
  {
    field: "name",
    headerName: "NAME",
    flex: 1,
  },
  {
    field: "target percentage",
    headerName: "TARGET %",
    flex: 1,
  },
  {
    field: "lt percentage",
    headerName: "LT %",
    flex: 1,
  },

  {
    field: "ut percentage",
    headerName: "UT %",
    flex: 1,
  },
  {
    field: "target amount",
    headerName: "TARGET $",
    flex: 1,
  },
  {
    field: "current percentage",
    headerName: "CURRENT %",
    flex: 1,
  },
  {
    field: "current amount",
    headerName: "CURRENT $",
    flex: 1,
  },
  {
    field: "out",
    headerName: "OUT",
    flex: 1,
  },
  {
    field: "post trade percentage",
    headerName: "POST TRADE %",
    flex: 1,
  },
  {
    field: "post trade amount",
    headerName: "POST TRADE $",
    flex: 1,
  },
  {
    field: "out final",
    headerName: "OUT",
    flex: 1,
  },
];
