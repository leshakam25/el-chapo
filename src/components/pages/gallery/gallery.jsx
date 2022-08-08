import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BtrCarousel from "./btrCarousel";

const Gallery = (props) => {
  return (
    <Container id="photo" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      <Box sx={{ color: "white" }}>
        <Box sx={{ maxWidth: "120px" }}>
          <Typography
            gutterBottom
            fontSize="44px"
            fontFamily="Oswald"
            fontWeight="bold"
          >
            ФОТО
          </Typography>
          <Box
            sx={{
              height: "3px",
              bgcolor: "#f2ee6f",
              maxWidth: "100%",
              mb: 6,
            }}
          ></Box>
        </Box>
        <BtrCarousel gallery={props.gallery} />
      </Box>
    </Container>
  );
};

export default Gallery;
