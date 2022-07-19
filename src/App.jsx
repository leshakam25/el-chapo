import React from "react";
import "./App.css";
import Contacts from "./components/pages/contacts/contacts";
import Gallery from "./components/pages/gallery/gallery";
import Header from "./components/pages/header/header";
import BarMenu from "./components/pages/menu/barMenu";
import Welcome from "./components/pages/welcome/welcome";

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <BarMenu />
      <Gallery />
      <Contacts />
    </>
  );
};

export default App;
