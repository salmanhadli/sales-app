import { Typography } from "@mui/material";

export default ({ margin, value }) => {
  return (
    <Typography
      variant="p"
      component="span"
      style={{
        border: "1px lightgrey solid",
        borderRadius: "50px",
        padding: "5px 10px",
        display: "inline-block",
        margin: `${margin ?? ""}`,
        justifySelf: "flex-start",
      }}
    >
      Total Records : {value}
    </Typography>
  );
};
