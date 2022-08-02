import React from "react";
import About from "../about/about";
import Contacts from "../contacts/contacts";
import Events from "../events/events";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import BarMenu from "../menu/barMenu";
import Poster from "../poster/poster";
import Welcome from "../welcome/welcome";
import logo from "../../../image/logo.svg";

const SpbGrande = () => {
  return (
    <>
      <Header logo={logo} />
      <Welcome />
      <Events />
      <Poster />
      {/* <About /> */}
      <BarMenu />
      <Gallery />
      <Contacts />
      <Footer />
    </>
  );
};

export default SpbGrande;
