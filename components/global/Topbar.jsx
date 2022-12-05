import React from "react";

//redux imports
import { useDispatch } from "react-redux";
import { logout } from '../../store/actions/auth'

//theme imports
import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../pages/theme";
import { InputBase } from "@mui/material";

// Icon Imports
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

  const submitHandler = () => {
    // e.preventDefault();
    dispatch(logout());
  };


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton onClick={submitHandler}>
          <LogoutIcon  />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
