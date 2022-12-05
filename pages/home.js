import Sidebar from "../components/global/SideBar";
import Home from "../components/home/Home";
import Topbar from "../components/global/TopBar";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Redux
import { connect } from "react-redux";

// Themes
import { Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";

// Components
import LoginForm from "../components/forms/LoginForm";

const login = ({ isLoggedIn }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <></>
      ) : (
        <>
        {/* <div className="container"> */}
            {/* <Topbar /> */}
            <Home/>
            {/* <div className="app">
                <main className="content">
                    
                    <div className="holder">
                        <Typography variant="h1" color={colors.greenAccent[300]}>
                            
                            Welcome to NSRIC! Start Here Body
                        
                        </Typography>
                    </div>
                </main>
            </div> */}
        {/* </div> */}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.token,
  };
};

export default connect(mapStateToProps)(login);
