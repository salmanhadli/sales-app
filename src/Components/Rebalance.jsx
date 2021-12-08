import React from "react";
import RadioInputs from "./RadioInputs";
import Search from "./Search";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SelectInputs from "./SelectInputs";
import "./Rebalance.css";

export default function Rebalance() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      <RadioInputs />
      <Search />
      <div style={{ flex: "1 0 30%" }}></div>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        placeholder="Trade Notes"
        style={{ width: 300, height: 70, fontSize: "20px" }}
      />
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
    </div>
  );
}
