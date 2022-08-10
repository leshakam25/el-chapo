import { Box, Container } from "@mui/material";
import React from "react";
import BlockTitle from "../../parts/blockTitle";
import BtrCarousel from "./galleryCarousel";

const Gallery = (props) => {
  return (
    <Container id="photo" maxWidth="xl">
      <Box sx={{ color: "white" }}>
        <Box sx={{ maxWidth: "120px" }}>
          <BlockTitle title="ФОТО" />
        </Box>
        <BtrCarousel gallery={props.gallery} />
      </Box>
    </Container>
  );
};

export default Gallery;
