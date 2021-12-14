import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getTableData } from "../Util/APIs";
// import Stack from "@mui/material/Stack";

export default function DataTable({
  rowsDataUrl,
  columns,
  setTotalRecords,
  noCheckBox,
}) {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getTableData(rowsDataUrl);
      setRows(data);
      setTotalRecords(data.length);
      setLoading(false);
    };

    if (rowsDataUrl) {
      fetchData();
    } else setLoading(false);
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
