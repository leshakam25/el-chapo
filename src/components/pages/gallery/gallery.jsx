import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BtrCarousel from "./btrCarousel";

const Gallery = (props) => {
  return (
    <Container id="photo" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      <Box sx={{ color: "white" }}>
        <Typography
          gutterBottom
          variant="h2"
          fontFamily="Oswald"
          fontWeight="bold"
        >
          ФОТО
        </Typography>
        <Box
          sx={{
            height: "3px",
            bgcolor: "#f2ee6f",
            maxWidth: "144px",
            mb: 6,
          }}
        ></Box>
        <BtrCarousel gallery={props.gallery} />
      </Box>
    </Container>
  );
};

export default Gallery;
