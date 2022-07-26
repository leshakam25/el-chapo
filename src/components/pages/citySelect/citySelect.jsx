import { Box, Typography } from "@mui/material";
import React from "react";
import CityButton from "../../parts/buttons/cityButton";
import CityButtonOuter from "../../parts/buttons/cityButtonOuter";

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
      <CityButton title="Санкт-Петербург Grande" link="/" adress="spb" />
      <CityButtonOuter
        title="Санкт-Петербург"
        link=""
        adress="https://www.google.com/"
      />
      <CityButtonOuter title="Краснодар" link="" adress="spb" />
    </Box>
  );
};

export default CitySelect;
