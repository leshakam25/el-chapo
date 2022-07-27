import React from "react";
import About from "../about/about";
import Contacts from "../contacts/contacts";
import Events from "../events/events";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import BarMenu from "../menu/barMenu";
import Welcome from "../welcome/welcome";
import { motion, useScroll } from "framer-motion";
import s from "./cities.module.css";

const Spb = () => {
  return (
    <motion.div>
      <Header />
      <Welcome />
      <Events />
      <About />
      <BarMenu />
      <Gallery />
      <Contacts />
      <Footer />
    </motion.div>
  );
};

export default Spb;
