import { Typography } from "@mui/material";
import React from "react";

const BlockTitle = (props) => {
  return (
    <Typography
      fontSize="48px"
      fontWeight="bold"
      fontFamily="Oswald"
      color="white"
      sx={{ textDecoration: "underline", textDecorationColor: "#f2ee6f" }}
    >
      {props.title}
    </Typography>
  );
};

export default BlockTitle;
