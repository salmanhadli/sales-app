import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default ({ gutter, alignRight, iconLabel, textLabel }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: `${gutter ? "20px 30px 0 auto" : "none"}`,
        alignItems: "flex-start",
        flexDirection: `${textLabel ? "column" : "row"}`,
      }}
    >
      {textLabel && <p style={{ margin: "4px 25px" }}>{textLabel}</p>}
      <Search
        style={{
          border: "#64b5f6 1px solid",
          maxWidth: "300px",
          marginLeft: `${alignRight && "auto"}`,
        }}
      >
        <SearchIconWrapper>
          {iconLabel ? iconLabel : <SearchIcon />}
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        {iconLabel && (
          <SearchIconWrapper sx={{ right: "0%", top: "0%" }}>
            <SearchIcon />
          </SearchIconWrapper>
        )}
      </Search>
    </div>
  );
};
