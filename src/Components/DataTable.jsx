import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Loading from "./Loading";

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
  }, [rowsDataUrl]);

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
