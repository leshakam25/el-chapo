import React from "react";
// import Header from "../header/header";
// import logo from "../../../image/logo.svg";
import { CardMedia } from "@mui/material";
import bg from "../../../image/welcomeLomoBg.png";
// import WelcomeLomo from "../welcome/welcomeLomo";

const SpbLomo = () => {
  return (
    <>
      {/* <Header logo={logo} />
      <WelcomeLomo /> */}
      <CardMedia
        component="img"
        src={bg}
        sx={{ height: "100vh", width: "100vw" }}
      />
    </>
  );
};

export default SpbLomo;
