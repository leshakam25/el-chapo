import React from "react";
import Header from "../header/header";
import WelcomeLomo from "../welcome/welcomeLomo";
import logo from "../../../image/logo.svg";

const SpbLomo = () => {
  return (
    <>
      <Header logo={logo} />
      <WelcomeLomo />
    </>
  );
};

export default SpbLomo;
