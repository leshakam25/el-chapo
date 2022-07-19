import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Images from "./images";

const Gallery = () => {
  return (
    <Container maxWidth="xl" sx={{ marginY: "120px " }}>
      <Box sx={{ color: "white" }}>
        <Typography variant="h2" fontWeight="bold">
          ФОТО
        </Typography>
        <Images />
      </Box>
    </Container>
  );
};

export default Gallery;
