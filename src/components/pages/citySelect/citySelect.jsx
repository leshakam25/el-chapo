import { Box, Typography } from "@mui/material";
import React from "react";
import CityButton from "../../parts/buttons/cityButton";

const CitySelect = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
      <CityButton title="Санкт-Петербург Grande" link="/" />
      <CityButton title="Санкт-Петербург" link="" />
      <CityButton title="Краснодар" link="" />
    </Box>
  );
};

export default CitySelect;
