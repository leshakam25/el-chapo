import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BtrCarousel from "./btrCarousel";

const Gallery = () => {
  return (
    <Container maxWidth="xl" sx={{ marginY: "120px " }}>
      <Box sx={{ color: "white" }}>
        <Typography
          gutterBottom
          variant="h2"
          fontFamily="Oswald"
          fontWeight="bold"
        >
          ФОТО
        </Typography>
        <BtrCarousel />
      </Box>
    </Container>
  );
};

export default Gallery;
