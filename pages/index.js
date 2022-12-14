//next imports
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//redux imports
import { connect } from "react-redux";

//theme imports
import { tokens } from "./theme";
import { Typography, useTheme } from "@mui/material";

//components import
import Sidebar from "../components/global/SideBar";
import Topbar from "../components/global/TopBar";
import Modal from "../components/services/Modal";

export function Home({ isLoggedIn, roles }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/home");
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Head>
            <title>NSRIC</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <div className="holder">
                <Typography variant="h1" color={colors.greenAccent[300]}>
                  Welcome to NSRIC!
                </Typography>
              </div>
            </main>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.token,
    // roles: state.auth.roles,
  };
};

export default connect(mapStateToProps)(Home);
