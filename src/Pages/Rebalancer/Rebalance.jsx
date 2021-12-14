import * as React from "react";
import RadioInputs from "../../Components/RadioInputs";
import Search from "../../Components/Search";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SelectInputs from "../../Components/SelectInputs";
import "./Rebalance.css";
import { Typography } from "@mui/material";
import TotalRecords from "../../Components/TotalRecords";
import DataTable from "../../Components/DataTable";
import BusinessIcon from "@mui/icons-material/Business";
import {
  rebalanceAccountColumns,
  rebalanceModelColumns,
} from "../../Util/dataTableColumns";

const RebalanceOptions = ["Account", "Model"];

export default function Rebalance() {
  const [option, setOption] = React.useState(RebalanceOptions[0]);
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
        <RadioInputs options={RebalanceOptions} setOption={setOption} />

        <Search iconLabel={<BusinessIcon sx={{ color: "blue" }} />} />

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
          {option}
        </Typography>

        <Search />
      </div>

      <TotalRecords margin={"10px"} value={totalRecords} />

      {option === "Account" && (
        <DataTable
          rowsDataUrl={""}
          columns={rebalanceAccountColumns}
          setTotalRecords={setTotalRecords}
          noCheckBox={true}
        />
      )}
      {option === "Model" && (
        <DataTable
          rowsDataUrl={""}
          columns={rebalanceModelColumns}
          setTotalRecords={setTotalRecords}
          noCheckBox={true}
        />
      )}
    </div>
  );
}
