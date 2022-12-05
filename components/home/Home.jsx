import React, { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../pages/theme";
import { useRouter } from "next/router";
import { Multiselect } from "multiselect-react-dropdown";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MapIcon from "@mui/icons-material/Map";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import Header from "./Header";
import Logo from "./Logo";
import Navber from "./Navber";
import Banner from "./banner"; 
import Mission from "./Mission";
import PrimaryService from "./PrimaryService";
import Division from "./Division";
import TopFooter from "./TopFooter";
import Footer from "./Footer";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    // <div className="app">
    <>
      <Header/>
      <Logo/>
      <Navber/>
      <Banner/>
      <Mission/> 
       <PrimaryService/>
       <Division/>
       <TopFooter/>
       <Footer/>

    </>
  );
};

export default Home;
