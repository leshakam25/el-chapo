import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BtrCarousel from "./btrCarousel";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: custom * 0.3, delay: custom * 0.2 },
  }),
};

const Gallery = () => {
  return (
    <Container id="photo" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      <motion.div initial="hidden" whileInView="visible">
        <Box sx={{ color: "white" }}>
          <motion.div custom={1} variants={textAnimation}>
            <Typography
              gutterBottom
              variant="h2"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              ФОТО
            </Typography>
          </motion.div>
          <BtrCarousel />
        </Box>
      </motion.div>
    </Container>
  );
};

export default Gallery;
