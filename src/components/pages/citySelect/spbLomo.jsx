import React from "react";
import Header from "../header/header";
import WelcomeLomo from "../welcome/welcomeLomo";
import logo from "../../../image/logo.svg";
import { CardMedia } from "@mui/material";

const SpbLomo = () => {
  return (
    <>
      {/* <Header logo={logo} />
      <WelcomeLomo /> */}
      <CardMedia
        component="img"
        src="https://i.imgur.com/FsBw0Yi.png"
        sx={{ height: "100vh", width: "100vw" }}
      />
    </>
  );
};

export default SpbLomo;
