import { Box, Typography } from "@mui/material";
import React from "react";
import CityButton from "../../parts/buttons/cityButton";

const CitySelect = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        fontFamily="Oswald"
        color="white"
      >
        Выберите бар:
      </Typography>
      <CityButton title="Санкт-Петербург Grande" link="/" />
      <CityButton title="Санкт-Петербург" link="" />
      <CityButton title="Краснодар" link="" />
    </Box>
  );
};

export default CitySelect;
