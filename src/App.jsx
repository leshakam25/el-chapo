import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import CitySelect from "./components/pages/citySelect/citySelect";
import SpbGrande from "./components/pages/citySelect/spbGrande";
import SpbLomo from "./components/pages/citySelect/spbLomo";
import SpbLomoNew from "./components/pages/citySelect/spbLomoNew";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CitySelect />} />
        <Route path="/spb-grande" element={<SpbGrande />} />
        <Route path="/spb-lomo" element={<SpbLomo />} />
        <Route path="/spb-lomo-new" element={<SpbLomoNew />} />
      </Routes>
    </div>
  );
};

export default App;
