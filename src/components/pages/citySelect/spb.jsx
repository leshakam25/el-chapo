import React from "react";
import About from "../about/about";
import Contacts from "../contacts/contacts";
import Events from "../events/events";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import BarMenu from "../menu/barMenu";
import Welcome from "../welcome/welcome";

const Spb = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Events />
      <About />
      <BarMenu />
      <Gallery />
      <Contacts />
      <Footer />
    </>
  );
};

export default Spb;
