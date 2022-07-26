import React from "react";
import About from "../pages/about/about";
import Contacts from "../pages/contacts/contacts";
import Events from "../pages/events/events";
import Footer from "../pages/footer/footer";
import Gallery from "../pages/gallery/gallery";
import Header from "../pages/header/header";
import BarMenu from "../pages/menu/barMenu";
import Welcome from "../pages/welcome/welcome";

const Spb = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Events />
      <About />
      <BarMenu />
      <Gallery />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Spb;
