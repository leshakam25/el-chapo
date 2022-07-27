import React from "react";
import Carousel from "better-react-carousel";
import { imagesData } from "./imagesData";
import { CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const BtrCarousel = () => {
  return (
    <Carousel cols={2} rows={2} gap={10} containerStyle={{}} loop>
      {imagesData &&
        imagesData.map((el, i) => (
          <Carousel.Item key={"btrCarousel" + i}>
            <motion.div
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            >
              <CardMedia
                sx={{ height: "420px" }}
                component="img"
                image={el.img}
                alt="no photo"
              />
            </motion.div>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default BtrCarousel;
