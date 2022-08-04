import React from "react";
import Header from "../header/header";
import logo from "../../../image/logo.svg";
import { CardMedia } from "@mui/material";

const SpbLomo = () => {
  return (
    <>
      {/* <Header logo={logo} />
      <WelcomeLomo /> */}
      <CardMedia
        component="img"
        src="https://i.postimg.cc/tC7GzV71/welcome-Lomo-Bg.png"
        sx={{ height: "100vh", width: "100vw" }}
      />
    </>
  );
};

export default SpbLomo;
