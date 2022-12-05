//next/react imports
import Link from "next/link";
import React, { useState } from "react";

//sidebar components
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../pages/theme";
import Modal from "../services/Modal";
import CreateRole from "../forms/modalForms/CreateRole";

//Icons import
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CreatePermission from "../forms/modalForms/CreatePermission";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");

  //modals variables
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showPermModal, setShowPermModal] = useState(false);

  return (
    <>
      {/* Modals */}
      <Modal onClose={() => setShowRoleModal(false)} show={showRoleModal}>
        <CreateRole />
      </Modal>
      <Modal onClose={() => setShowPermModal(false)} show={showPermModal}>
        <CreatePermission />
      </Modal>

      {/* Sidebar */}
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            // background: `${colors.primary[400]} !important`,
            background: "#fff !important",
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed} collapsedWidth="90px">
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    NSRIC
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/images/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Chowdhury Md. Rabby Mahmud
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Super Admin
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "5%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <SubMenu
                title="Admin Functions"
                icon={<FolderOpenOutlinedIcon />}
                style={{
                  color: colors.grey[100],
                }}
              >
                <SubMenu
                  title="Users"
                  icon={<FolderOpenOutlinedIcon />}
                  style={{
                    color: colors.grey[100],
                  }}
                >
                  <Item
                    title="Create User"
                    to="/users/createUser"
                    icon={<AdminPanelSettingsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="User List"
                    to="/users/userList"
                    icon={<AdminPanelSettingsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </SubMenu>
                <SubMenu
                  title="Roles"
                  icon={<FolderOpenOutlinedIcon />}
                  style={{
                    color: colors.grey[100],
                  }}
                >
                  <MenuItem
                    active={selected === "Create Role"}
                    style={{
                      color: colors.grey[100],
                    }}
                    onClick={() => {
                      setSelected("Create Role");
                      setShowRoleModal(true);
                    }}
                    icon={<AdminPanelSettingsIcon />}
                  >
                    <Typography>Create Role</Typography>
                  </MenuItem>
                </SubMenu>

                <SubMenu
                  title="Permissions"
                  icon={<FolderOpenOutlinedIcon />}
                  style={{
                    color: colors.grey[100],
                  }}
                >
                  <MenuItem
                    active={selected === "Create Permission"}
                    style={{
                      color: colors.grey[100],
                    }}
                    onClick={() => {
                      setSelected("Create Permission");
                      setShowPermModal(true);
                    }}
                    icon={<AdminPanelSettingsIcon />}
                  >
                    <Typography>Create Permission</Typography>
                  </MenuItem>
                  <SubMenu
                    title="Assign"
                    icon={<FolderOpenOutlinedIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                  >
                    <Item
                      title="To Role"
                      to="/assignPermissionToRole"
                      icon={<AdminPanelSettingsIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <Item
                      title="To User"
                      to="/assignPermissionToRole"
                      icon={<AdminPanelSettingsIcon />}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </SubMenu>
                </SubMenu>
                <SubMenu
                  title="Companies"
                  icon={<FolderOpenOutlinedIcon />}
                  style={{
                    color: colors.grey[100],
                  }}
                >
                  <Item
                    title="Create Company"
                    to="/companies/createCompany"
                    icon={<AdminPanelSettingsIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </SubMenu>
              </SubMenu>
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </>
  );
};

export default Sidebar;
