import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Stack from "@mui/material/Stack";

export default function DataTable({
  rowsDataUrl,
  columns,
  setTotalRecords,
  noCheckBox,
}) {
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
    <DataGrid
      rows={rows}
      // rowHeight={120}
      //  headerHeight={72}
      autoHeight={true}
      columns={columns}
      pageSize={5}
      // hideFooter
      rowsPerPageOptions={[5]}
      // checkboxSelection={noCheckBox === true ? false : true}
      checkboxSelection={!!!noCheckBox}
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
  );
}
