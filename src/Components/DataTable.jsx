import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Loading from "./Loading";
// import TableContainer from "@mui/material/TableContainer";
// import Paper from "@mui/material/Paper";

let defaultColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 800 },
  { field: "active", headerName: "Active", width: 130 },
  {
    field: "noa",
    headerName: "Number of Accounts",
    width: 180,
  },
];

export default function DataTable({ rowsDataUrl, columns }) {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      axios.get(rowsDataUrl).then((res) => {
        // console.log(res.data);
        if (!res.data.data) {
          setRows(res.data);
        } else setRows(res.data.data);
        setLoading(false);
      });
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div style={{ height: 450, width: "100%" }}>
        <Loading />
      </div>
    );
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
