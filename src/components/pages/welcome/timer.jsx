import { Typography, Box } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";
import s from "./welcome.module.css";

export default function Timer() {
  const date = "2022-07-27T18:00:00";

  const Completionist = () => (
    <Typography variant="h2">Мы уже открыты!</Typography>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Box
          className={s.timer}
          sx={{ width: "320px", height: "auto", textAlign: "center" }}
        >
          <Typography fontFamily="Oswald" variant="h6" fontWeight="normal">
            Мы откроемся через: <br />
          </Typography>
          <Typography fontFamily="Oswald" variant="h3">
            {days} : {hours} : {minutes} : {seconds}
          </Typography>{" "}
          <Typography fontFamily="Oswald" variant="body2" fontWeight="light">
            ДНЕЙ ЧАСОВ МИНУТ СЕКУНД
          </Typography>
        </Box>
      );
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "inherit",
        maxWidth: "400px",
        p: 2,
        m: 2,
        borderRadius: 2,
        right: 0,
        top: 0,
      }}
    >
      <Countdown date={date} renderer={renderer}>
        <Completionist />
      </Countdown>
    </Box>
  );
}
