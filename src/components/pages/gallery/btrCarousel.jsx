import React from "react";
import Carousel from "better-react-carousel";
import { imagesData } from "./imagesData";
import { CardMedia } from "@mui/material";

const BtrCarousel = () => {
  return (
    <Carousel cols={3} rows={2} gap={10} loop>
      {imagesData &&
        imagesData.map((el, i) => (
          <Carousel.Item key={"btrCarousel" + i}>
            <CardMedia
              sx={{ height: "420px" }}
              component="img"
              image={el.img}
              alt="no photo"
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default BtrCarousel;
