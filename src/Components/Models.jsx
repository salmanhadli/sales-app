import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Loading from "./Loading";

export default () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <DataTable />
    </React.Suspense>
  );
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 500 },
  { field: "active", headerName: "Active", width: 130 },
  {
    field: "noa",
    headerName: "Number of Accounts",
    width: 180,
  },
];

export function DataTable() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      axios
        .get("https://run.mocky.io/v3/666c1f2e-a4f9-43b9-b1a1-b1d643e766c1")
        .then((res) => {
          setRows(res.data.data);
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
