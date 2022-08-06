import React from "react";
import Carousel from "better-react-carousel";
import { CardMedia } from "@mui/material";

const BtrCarousel = (props) => {
  return (
    <Carousel cols={2} rows={2} gap={8} loop>
      {props.gallery &&
        props.gallery.map((el, i) => (
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
