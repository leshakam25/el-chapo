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
        <CardMedia
          component="img"
          src="https://static.tildacdn.info/tild3831-6537-4230-b761-643566333431/Group_387.png"
          sx={{ maxWidth: "800px" }}
        />
      </Box>
    </Container>
  );
};

export default Footer;
