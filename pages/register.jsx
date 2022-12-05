import React, { useEffect } from "react";
import Link from "next/link";

import { Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import RegisterForm from "../components/forms/RegisterForm"

const Registration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 mt-5 bg-light p-5 rounded">
          <Link href="/" className="anchor">
            <Typography
              variant="h1"
              color={colors.greenAccent[300]}
              className="text-center"
            >
              NSRIC
            </Typography>
          </Link>
          <Typography variant="h2" color={colors.greenAccent[300]} className="mb-4">
            Registration
          </Typography>
          <RegisterForm />
          <p>
            Already have an account?{" "}
            <Link href="/login" className="anchor">
              Login
            </Link>
          </p>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Registration;