import * as React from "react";
import Search from "../../Components/Search";
import SelectInputs from "../../Components/SelectInputs";
import { Typography } from "@mui/material";
import TotalRecords from "../../Components/TotalRecords";
import DataTable from "../../Components/DataTable";
import BusinessIcon from "@mui/icons-material/Business";
import { BasicButtons } from "../../Pages/Customers";
import {
  analyzerAccountsColumns,
  analyzerSecuritiesColumns,
} from "../../Util/dataTableColumns";

export default function Analyzer() {
  const [totalRecords, setTotalRecords] = React.useState("0");
  return (
    <div>
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
      </div>

      <div style={{ margin: "10px 22px", width: "240px" }}>
        <SelectInputs
          label="Level"
          options={["Security", "Sector", "Category"]}
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
      </div>

      <TotalRecords margin={"10px"} value={totalRecords} />

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
    </div>
  );
}
