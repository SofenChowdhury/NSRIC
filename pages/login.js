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
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 bg-light p-5 mt-5 rounded">
              <Link href="/" className="anchor">
                <Typography
                  variant="h1"
                  color={colors.greenAccent[300]}
                  className="text-center"
                >
                  NSRIC
                </Typography>
              </Link>
              <Typography
                variant="h2"
                color={colors.greenAccent[300]}
                className="mb-4"
              >
                Login
              </Typography>
              <LoginForm />
              {/* <p>
                Don't have an account?{" "}
                <Link href="/register" className="anchor">
                  Register
                </Link>
              </p> */}
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
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
