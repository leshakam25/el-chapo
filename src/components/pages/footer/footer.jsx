import { CardMedia, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import logo from "../../../image/logo.svg";

const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ marginY: "120px" }}>
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia component="img" src={logo} />
      </Box>
    </Container>
  );
};

export default Footer;
