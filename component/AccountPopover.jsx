import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useContentContext } from "../Hooks/ContentContext";
import { useRouter } from "next/router";

export default function AccountPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { handleUserInfo, userInfo } = useContentContext();
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_info");
    handleUserInfo({});
    router.push("/flights");
  };

  const handleFlights = () => {
    router.push("/pilot-flights");
  };

  const handleBookings = () => {
    router.push("/bookings");
  };

  console.log(userInfo, "userInfouserInfouserInfouserInfo");

  return (
    <React.Fragment>
      <Box>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 40, height: 40 }}>
            {userInfo?.first_name[0]}
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#1a1a1a",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
          className: "AccountPopover",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div class="user-profile-name">
          <h5>{userInfo?.first_name + " " + userInfo?.last_name}</h5>
          <p>{userInfo?.email}</p>
        </div>
        <Divider />
        {userInfo.user_type == "pilot" && (
          <MenuItem onClick={handleFlights}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Flights
          </MenuItem>
        )}
        <MenuItem onClick={handleBookings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Bookings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
