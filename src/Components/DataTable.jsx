import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Stack from "@mui/material/Stack";

export default function DataTable({ rowsDataUrl, columns, setTotalRecords }) {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      axios.get(rowsDataUrl).then((res) => {
        // console.log(res.data);
        if (!res.data.data) {
          setRows(res.data);
          setTotalRecords(res.data.length);
        } else {
          setRows(res.data.data);
          setTotalRecords(res.data.data.length);
        }
        setLoading(false);
      });
    };
    if (rowsDataUrl) getData();
    else setLoading(false);
  }, [rowsDataUrl]);

  return (
    <div style={{ width: "100%", margin: "10px auto" }}>
      <DataGrid
        rows={rows}
        // rowHeight={120}
        autoHeight={true}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        loading={loading}
        // components={{
        //   NoRowsOverlay: () => (
        //     <Stack
        //       sx={{
        //         height: "100%",
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //       }}
        //     >
        //       No rows in DataGrid
        //     </Stack>
        //   ),
        // }}
      />
    </div>
  );
}
