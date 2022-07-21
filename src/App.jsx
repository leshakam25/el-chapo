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

const App = () => {
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

export default App;
