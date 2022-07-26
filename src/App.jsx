import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import "./App.css";
import CitySelect from "./components/pages/citySelect/citySelect";
import Spb from "./components/pages/citySelect/spb";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CitySelect />} />
        <Route path="/spb-grande" element={<Spb />} />
      </Routes>
    </div>
  );
};

export default App;
