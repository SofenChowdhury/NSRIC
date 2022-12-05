//react
import React, { useState, useEffect } from "react";

//redux imports
import { connect } from "react-redux";

//theme imports
import { tokens } from "../theme";
import { Typography, useTheme } from "@mui/material";

//components
import Sidebar from "../../components/global/SideBar";
import Topbar from "../../components/global/TopBar";
import RegisterForm from "../../components/forms/RegisterForm";

const createUser = ({ roles }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [superAdmin, setSuperAdmin] = useState(false);

  useEffect(() => {
    roles.map((role) => {
      if (role.name === "SuperAdmin") {
        setSuperAdmin(true);
      }
    });
  }, []);

  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <div className="holder">
            {superAdmin ? (
              <>
                <Typography variant="h2" className="mb-4" color={colors.greenAccent[300]}>
                  Create User Form
                </Typography>
                {superAdmin && <RegisterForm />}
              </>
            ) : (
              <Typography variant="h3" color={colors.greenAccent[300]}>
                Permission required!
              </Typography>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    roles: state.auth.roles,
  };
};

export default connect(mapStateToProps)(createUser);
