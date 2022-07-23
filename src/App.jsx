import { motion } from "framer-motion";
import React from "react";
import "./App.css";
import About from "./components/pages/about/about";
import Contacts from "./components/pages/contacts/contacts";
import Events from "./components/pages/events/events";
import Footer from "./components/pages/footer/footer";
import Gallery from "./components/pages/gallery/gallery";
import Header from "./components/pages/header/header";
import BarMenu from "./components/pages/menu/barMenu";
import Welcome from "./components/pages/welcome/welcome";
import Privacy from "./components/parts/privacy";

const App = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 3 }}
    >
      <Header />
      <Welcome />
      <Events />
      <About />
      <BarMenu />
      <Gallery />
      <Contacts />
      <Footer />
      <Privacy />
    </motion.div>
  );
};

export default App;
