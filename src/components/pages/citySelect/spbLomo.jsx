import React from "react";
import { CardMedia } from "@mui/material";
import bg from "../../../image/welcomeLomoBg.png";

const SpbLomo = () => {
  return (
    <>
      <CardMedia
        component="img"
        src={bg}
        sx={{ height: "100vh", width: "100vw" }}
      />
    </>
  );
};

export default SpbLomo;
