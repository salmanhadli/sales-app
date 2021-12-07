import { Typography } from "@mui/material";

export default () => {
  return (
    <Typography
      variant="p"
      component="h4"
      style={{
        border: "1px lightgrey solid",
        borderRadius: "50px",
        padding: "5px 10px",
        display: "inline-block",
        marginLeft: "40px",
      }}
    >
      Total Records : 59
    </Typography>
  );
};
