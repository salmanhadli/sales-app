import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
// import ContentCut from "@mui/icons-material/ContentCut";
// import ContentCopy from "@mui/icons-material/ContentCopy";
// import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import DoneIcon from "@mui/icons-material/Done";
import TableChartIcon from "@mui/icons-material/TableChart";
// import ViewKanbanSharpIcon from '@mui/icons-material/ViewKanbanSharp';
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";

export default function BasicMenu({ label, options, title, iconMenu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          height: "100%",
        }}
        title={title}
      >
        {label ? label : <MoreVertIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {iconMenu ? (
          <IconMenu />
        ) : (
          options.map((option, index) => {
            let disable = true;
            if (
              option === "New" ||
              option === "New Modal" ||
              option === "Export All"
            )
              disable = false;
            return (
              <MenuItem
                onClick={handleClose}
                key={option + " " + index}
                disabled={disable}
              >
                {option}
              </MenuItem>
            );
          })
        )}
      </Menu>
    </div>
  );
}

function IconMenu() {
  return (
    // <Paper sx={{ width: 320, maxWidth: "100%" }}>
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <DoneIcon />
        </ListItemIcon>
        <ListItemText>Table</ListItemText>
        <ListItemIcon sx={{ ml: 3 }}>
          <TableChartIcon />
        </ListItemIcon>
      </MenuItem>
      <MenuItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText>Kan ban</ListItemText>
        <ListItemIcon sx={{ ml: 3 }}>{/* <ViewKanbanIcon /> */}</ListItemIcon>
      </MenuItem>
      <MenuItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText>Split view</ListItemText>
        <ListItemIcon sx={{ ml: 3 }}>
          <VerticalSplitIcon />
        </ListItemIcon>
      </MenuItem>
      {/* <Divider />
      <MenuItem>
        <ListItemIcon>
          <Cloud fontSize="small" />
        </ListItemIcon>
        <ListItemText>Web Clipboard</ListItemText>
      </MenuItem> */}
    </MenuList>
    // </Paper>
  );
}
