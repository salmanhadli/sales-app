import * as React from "react";
import Box from "@mui/material/Box";

export default function Content({ children }) {
  return (
    <div className="Content">
      <Box
        sx={{
          width: "95%",
          margin: "20px auto",
          backgroundColor: "white",
          borderRadius: "8px",
          height: "85vh",
        }}
      >
        {children}
      </Box>
    </div>
  );
}
